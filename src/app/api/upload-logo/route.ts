import { NextResponse } from "next/server";
import { writeFile, unlink, mkdir } from "fs/promises";
import { existsSync } from "fs";
import { kv } from "@vercel/kv";
import path from "path";

const BRAND_KEY = "brand_settings";

type BrandSettings = {
  primaryColor?: string;
  logoUrl?: string;
};

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

    const oldSettingsRaw = await kv.get(BRAND_KEY);
    const oldSettings =
      typeof oldSettingsRaw === "object" && oldSettingsRaw !== null
        ? (oldSettingsRaw as BrandSettings)
        : {};

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const uploadDir = path.join(process.cwd(), "public/brand");
    if (!existsSync(uploadDir)) {
      await mkdir(uploadDir, { recursive: true });
    }

    const extension = file.name.split(".").pop();
    const filename = `logo-${Date.now()}.${extension}`;
    const filepath = path.join(uploadDir, filename);

    await writeFile(filepath, buffer);

    const newLogoUrl = `/brand/${filename}`;

    if (
      oldSettings.logoUrl &&
      oldSettings.logoUrl !== "/logo.png" &&
      oldSettings.logoUrl.startsWith("/brand/")
    ) {
      const oldFilename = oldSettings.logoUrl.split("/").pop();
      if (oldFilename) {
        const oldFilepath = path.join(uploadDir, oldFilename);
        if (existsSync(oldFilepath)) {
          await unlink(oldFilepath);
        }
      }
    }

    await kv.set(BRAND_KEY, {
      ...oldSettings,
      logoUrl: newLogoUrl,
    });

    return NextResponse.json({ url: newLogoUrl });
  } catch (err: unknown) {
    if (err instanceof Error) {
      console.error("[UploadLogo]", err.message);
    }

    return NextResponse.json(
      { error: "Upload failed" },
      { status: 500 }
    );
  }
}
