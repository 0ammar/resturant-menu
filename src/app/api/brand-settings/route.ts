import { NextResponse } from "next/server";
import { kv } from "@vercel/kv";

const BRAND_KEY = "brand_settings";

type BrandSettings = {
  primaryColor: string;
  logoUrl: string;
};

export async function GET() {
  try {
    console.log("[BrandSettings][GET] Fetching settings...");
    const settings = (await kv.get(BRAND_KEY)) as BrandSettings | null;
    
    const result = settings ?? { 
      primaryColor: "#f9d457", 
      logoUrl: "/logo.png" 
    };
    
    console.log("[BrandSettings][GET] Returning:", result);
    return NextResponse.json(result);
    
  } catch (err: unknown) {
    console.error("[BrandSettings][GET] Error:", err);
    
    if (err instanceof Error) {
      return NextResponse.json(
        { error: err.message },
        { status: 500 }
      );
    }
    
    return NextResponse.json(
      { error: "Failed to fetch brand settings" },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    console.log("[BrandSettings][POST] Saving settings...");
    
    const data = (await request.json()) as BrandSettings;
    console.log("[BrandSettings][POST] Data received:", data);
    
    // Validation
    if (!data.primaryColor || !data.logoUrl) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }
    
    // Validate color format
    if (!/^#[0-9A-Fa-f]{6}$/.test(data.primaryColor)) {
      return NextResponse.json(
        { error: "Invalid color format. Use #RRGGBB" },
        { status: 400 }
      );
    }
    
    await kv.set(BRAND_KEY, data);
    console.log("[BrandSettings][POST] Saved successfully");
    
    return NextResponse.json({ success: true, data });
    
  } catch (err: unknown) {
    console.error("[BrandSettings][POST] Error:", err);
    
    if (err instanceof Error) {
      return NextResponse.json(
        { error: err.message },
        { status: 500 }
      );
    }
    
    return NextResponse.json(
      { error: "Failed to save brand settings" },
      { status: 500 }
    );
  }
}