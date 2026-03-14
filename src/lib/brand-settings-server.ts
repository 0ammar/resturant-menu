import { kv } from "@vercel/kv";

type BrandSettings = {
  primaryColor: string;
  logoUrl: string;
};

const DEFAULTS: BrandSettings = {
  primaryColor: "#f9d457",
  logoUrl: "/logo.png",
};

export async function getBrandSettings(): Promise<BrandSettings> {
  try {
    const settings = (await kv.get("brand_settings")) as BrandSettings | null;
    return settings ?? DEFAULTS;
  } catch {
    return DEFAULTS;
  }
}