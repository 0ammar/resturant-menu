import { NextResponse } from "next/server";
import { store } from "@/lib/store";

export const runtime = "nodejs";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const categoryId = searchParams.get("categoryId") || undefined;
    return NextResponse.json(await store.getProducts(categoryId));
  } catch (e) {
    console.error("[API][PRODUCTS][GET]", e);
    return NextResponse.json({ error: "Failed to fetch" }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const data = await req.json();
    if (!data?.name || !data?.nameAr || !data?.categoryId) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }
    return NextResponse.json(await store.createProduct(data), { status: 201 });
  } catch (e) {
    console.error("[API][PRODUCTS][POST]", e);
    return NextResponse.json({ error: "Failed to create" }, { status: 500 });
  }
}
