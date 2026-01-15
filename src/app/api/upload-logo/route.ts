import { NextResponse } from "next/server";
import { kv } from "@vercel/kv";
import { put, del } from "@vercel/blob";

const BRAND_KEY = "brand_settings";

export async function POST(request: Request) {
  try {
    console.log("[UploadLogo] Starting upload...");
    
    const formData = await request.formData();
    const file = formData.get("logo");

    if (!file || !(file instanceof File)) {
      console.error("[UploadLogo] No file provided");
      return NextResponse.json(
        { error: "No file provided" },
        { status: 400 }
      );
    }

    console.log("[UploadLogo] File received:", {
      name: file.name,
      type: file.type,
      size: file.size
    });

    const allowedTypes = [
      "image/png",
      "image/jpeg",
      "image/jpg",
      "image/svg+xml",
    ];

    if (!allowedTypes.includes(file.type)) {
      console.error("[UploadLogo] Invalid file type:", file.type);
      return NextResponse.json(
        { error: `Invalid file type. Allowed: PNG, JPG, SVG` },
        { status: 400 }
      );
    }

    // Max 5MB
    if (file.size > 5 * 1024 * 1024) {
      return NextResponse.json(
        { error: "File too large. Max 5MB" },
        { status: 400 }
      );
    }

    // Check if token exists
    if (!process.env.BLOB_READ_WRITE_TOKEN) {
      console.error("[UploadLogo] BLOB_READ_WRITE_TOKEN not found");
      return NextResponse.json(
        { error: "Storage not configured. Please add BLOB_READ_WRITE_TOKEN environment variable." },
        { status: 500 }
      );
    }

    console.log("[UploadLogo] Fetching old settings...");
    const oldSettings = (await kv.get(BRAND_KEY)) as { logoUrl?: string; primaryColor?: string } | null;
    console.log("[UploadLogo] Old settings:", oldSettings);

    console.log("[UploadLogo] Uploading to Blob Storage...");
    const arrayBuffer = await file.arrayBuffer();
    
    const filename = `brand/logo-${Date.now()}.${file.name.split('.').pop()}`;
    
    const blob = await put(filename, arrayBuffer, {
      access: "public",
      contentType: file.type,
      token: process.env.BLOB_READ_WRITE_TOKEN,
    });

    console.log("[UploadLogo] Blob uploaded successfully:", blob.url);

    // Delete old logo if it exists in Vercel Blob
    if (oldSettings?.logoUrl && oldSettings.logoUrl.includes("vercel-storage.com")) {
      console.log("[UploadLogo] Deleting old logo:", oldSettings.logoUrl);
      try {
        await del(oldSettings.logoUrl, {
          token: process.env.BLOB_READ_WRITE_TOKEN,
        });
        console.log("[UploadLogo] Old logo deleted");
      } catch (delErr) {
        console.warn("[UploadLogo] Failed to delete old logo:", delErr);
      }
    }

    console.log("[UploadLogo] Updating KV with new URL...");
    const newSettings = {
      primaryColor: oldSettings?.primaryColor || '#f9d457',
      logoUrl: blob.url,
    };
    
    await kv.set(BRAND_KEY, newSettings);
    console.log("[UploadLogo] KV updated successfully");

    return NextResponse.json({ 
      url: blob.url,
      success: true 
    });

  } catch (err) {
    console.error("[UploadLogo] Error:", err);
    
    if (err instanceof Error) {
      return NextResponse.json(
        { error: err.message },
        { status: 500 }
      );
    }
    
    return NextResponse.json(
      { error: "Upload failed" },
      { status: 500 }
    );
  }
}