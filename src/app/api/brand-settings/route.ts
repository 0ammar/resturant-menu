import { NextResponse } from "next/server";
import { kv } from "@vercel/kv";

const BRAND_KEY = "brand_settings";

type BrandSettings = {
  primaryColor: string;
  logoUrl: string;
};

export async function GET() {
  try {
    const settings = (await kv.get(BRAND_KEY)) as BrandSettings | null;

    return NextResponse.json(
      settings ?? { primaryColor: "#f9d457", logoUrl: "/logo.png" }
    );
  } catch (err: unknown) {
    if (err instanceof Error) {
      console.error("[BrandSettings][GET]", err.message);
    }

    return NextResponse.json(
      { error: "Failed to fetch brand settings" },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const data = (await request.json()) as BrandSettings;
    await kv.set(BRAND_KEY, data);

    return NextResponse.json({ success: true, data });
  } catch (err: unknown) {
    if (err instanceof Error) {
      console.error("[BrandSettings][POST]", err.message);
    }

    return NextResponse.json(
      { error: "Failed to save brand settings" },
      { status: 500 }
    );
  }
}
