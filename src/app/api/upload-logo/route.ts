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

    console.log("[UploadLogo] File received:", file.name, file.type, file.size);

    const allowedTypes = [
      "image/png",
      "image/jpeg",
      "image/jpg",
      "image/svg+xml",
    ];

    if (!allowedTypes.includes(file.type)) {
      console.error("[UploadLogo] Invalid file type:", file.type);
      return NextResponse.json(
        { error: `Invalid file type: ${file.type}. Allowed: PNG, JPG, SVG` },
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

    console.log("[UploadLogo] Fetching old settings...");
    const oldSettings = (await kv.get(BRAND_KEY)) as { logoUrl?: string } | null;
    console.log("[UploadLogo] Old settings:", oldSettings);

    console.log("[UploadLogo] Uploading to Blob...");
    const arrayBuffer = await file.arrayBuffer();
    const blob = await put(
      `brand/logo-${Date.now()}.${file.name.split('.').pop()}`,
      arrayBuffer,
      {
        access: "public",
        contentType: file.type,
      }
    );

    console.log("[UploadLogo] Blob uploaded:", blob.url);

    // Delete old logo if it exists in Vercel Blob
    if (oldSettings?.logoUrl?.includes("vercel-storage.com")) {
      console.log("[UploadLogo] Deleting old logo:", oldSettings.logoUrl);
      try {
        await del(oldSettings.logoUrl);
      } catch (delErr) {
        console.warn("[UploadLogo] Failed to delete old logo:", delErr);
      }
    }

    console.log("[UploadLogo] Updating KV with new URL...");
    await kv.set(BRAND_KEY, {
      ...oldSettings,
      logoUrl: blob.url,
    });

    console.log("[UploadLogo] Success!");
    return NextResponse.json({ url: blob.url });

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