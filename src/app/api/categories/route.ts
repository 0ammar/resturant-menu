import { NextResponse } from "next/server";
import { store } from "@/lib/store";

export const runtime = "nodejs";

export async function GET() {
  try {
    return NextResponse.json(await store.getCategories());
  } catch (e) {
    console.error("[API][CATEGORIES][GET]", e);
    return NextResponse.json({ error: "Failed to fetch" }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const data = await req.json();
    if (!data?.name || !data?.nameAr) {
      return NextResponse.json({ error: "Missing name/nameAr" }, { status: 400 });
    }
    return NextResponse.json(await store.createCategory(data), { status: 201 });
  } catch (e) {
    console.error("[API][CATEGORIES][POST]", e);
    return NextResponse.json({ error: "Failed to create" }, { status: 500 });
  }
}
