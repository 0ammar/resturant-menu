import { NextResponse } from "next/server";
import { kv } from "@vercel/kv";
import { put, del } from "@vercel/blob";

const BRAND_KEY = "brand_settings";

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const file = formData.get("logo");

    if (!(file instanceof File)) {
      return NextResponse.json({ error: "No file provided" }, { status: 400 });
    }

    const allowedTypes = [
      "image/png",
      "image/jpeg",
      "image/jpg",
      "image/svg+xml",
    ];

    if (!allowedTypes.includes(file.type)) {
      return NextResponse.json({ error: "Invalid file type" }, { status: 400 });
    }

    const oldSettings = (await kv.get(BRAND_KEY)) as { logoUrl?: string } | null;

    const blob = await put(
      `brand/logo-${Date.now()}`,
      await file.arrayBuffer(),
      {
        access: "public",
        contentType: file.type,
      }
    );

    if (oldSettings?.logoUrl?.includes("vercel-storage.com")) {
      await del(oldSettings.logoUrl).catch(() => {});
    }

    await kv.set(BRAND_KEY, {
      ...oldSettings,
      logoUrl: blob.url,
    });

    return NextResponse.json({ url: blob.url });
  } catch (err) {
    console.error("[UploadLogo]", err);
    return NextResponse.json({ error: "Upload failed" }, { status: 500 });
  }
}
