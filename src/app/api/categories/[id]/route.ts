import { NextResponse } from "next/server";
import { store } from "@/lib/store";

export const runtime = "nodejs";

type Context = { params: Promise<{ id: string }> };

export async function PUT(req: Request, { params }: Context) {
  const { id } = await params;

  try {
    const data = await req.json();
    const updated = await store.updateCategory(id, data);

    if (!updated) {
      return NextResponse.json({ error: "Not found" }, { status: 404 });
    }

    return NextResponse.json(updated);
  } catch (e) {
    console.error("[API][CATEGORIES][PUT]", id, e);
    return NextResponse.json({ error: "Failed to update" }, { status: 500 });
  }
}

export async function DELETE(_req: Request, { params }: Context) {
  const { id } = await params;

  try {
    await store.deleteCategory(id);
    return NextResponse.json({ success: true });
  } catch (e) {
    console.error("[API][CATEGORIES][DELETE]", id, e);
    return NextResponse.json({ error: "Failed to delete" }, { status: 500 });
  }
}
