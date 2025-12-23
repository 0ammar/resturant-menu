import { kv } from "@vercel/kv";
import { promises as fs } from "fs";
import path from "path";

export type Category = { id: string; name: string; nameAr: string };
export type Product = {
  id: string;
  name: string;
  nameAr: string;
  description: string;
  descriptionAr: string;
  price: number;
  image?: string;
  categoryId: string;
};

const KEY_CATEGORIES = "categories";
const KEY_PRODUCTS = "products";

const hasKV =
  !!process.env.KV_REST_API_URL && !!process.env.KV_REST_API_TOKEN;

const uid = () => crypto.randomUUID();

const toNumber = (v: unknown) => {
  const n = typeof v === "number" ? v : Number(v);
  return Number.isFinite(n) ? n : 0;
};

const DATA_DIR = path.join(process.cwd(), ".data");
const DATA_FILE = path.join(DATA_DIR, "menu.json");

type LocalData = { categories: Category[]; products: Product[] };

async function readLocal(): Promise<LocalData> {
  try {
    const raw = await fs.readFile(DATA_FILE, "utf8");
    const parsed = JSON.parse(raw) as LocalData;
    return {
      categories: Array.isArray(parsed.categories) ? parsed.categories : [],
      products: Array.isArray(parsed.products) ? parsed.products : [],
    };
  } catch {
    return { categories: [], products: [] };
  }
}

async function writeLocal(data: LocalData) {
  await fs.mkdir(DATA_DIR, { recursive: true });
  await fs.writeFile(DATA_FILE, JSON.stringify(data, null, 2), "utf8");
}

export const store = {
  async getCategories(): Promise<Category[]> {
    if (hasKV) return (await kv.get<Category[]>(KEY_CATEGORIES)) ?? [];
    return (await readLocal()).categories;
  },

  async createCategory(data: Omit<Category, "id">) {
    const newCat: Category = { id: uid(), ...data };

    if (hasKV) {
      const cats = (await kv.get<Category[]>(KEY_CATEGORIES)) ?? [];
      await kv.set(KEY_CATEGORIES, [newCat, ...cats]);
      return newCat;
    }

    const local = await readLocal();
    local.categories = [newCat, ...local.categories];
    await writeLocal(local);
    return newCat;
  },

  async updateCategory(id: string, data: Partial<Category>) {
    if (hasKV) {
      const cats = (await kv.get<Category[]>(KEY_CATEGORIES)) ?? [];
      const idx = cats.findIndex((c) => c.id === id);
      if (idx === -1) return null;
      cats[idx] = { ...cats[idx], ...data };
      await kv.set(KEY_CATEGORIES, cats);
      return cats[idx];
    }

    const local = await readLocal();
    const idx = local.categories.findIndex((c) => c.id === id);
    if (idx === -1) return null;
    local.categories[idx] = { ...local.categories[idx], ...data };
    await writeLocal(local);
    return local.categories[idx];
  },

  async deleteCategory(id: string) {
    if (hasKV) {
      const cats = (await kv.get<Category[]>(KEY_CATEGORIES)) ?? [];
      await kv.set(KEY_CATEGORIES, cats.filter((c) => c.id !== id));

      const prods = (await kv.get<Product[]>(KEY_PRODUCTS)) ?? [];
      await kv.set(KEY_PRODUCTS, prods.filter((p) => p.categoryId !== id));
      return true;
    }

    const local = await readLocal();
    local.categories = local.categories.filter((c) => c.id !== id);
    local.products = local.products.filter((p) => p.categoryId !== id);
    await writeLocal(local);
    return true;
  },

  async getProducts(categoryId?: string): Promise<Product[]> {
    const list = hasKV
      ? ((await kv.get<Product[]>(KEY_PRODUCTS)) ?? [])
      : (await readLocal()).products;

    const normalized = list.map((p) => ({ ...p, price: toNumber(p.price) }));
    return categoryId
      ? normalized.filter((p) => p.categoryId === categoryId)
      : normalized;
  },

  async createProduct(data: Omit<Product, "id">) {
    const newProd: Product = {
      id: uid(),
      ...data,
      price: toNumber(data.price),
      image: data.image || "/product-1.jpg",
    };

    if (hasKV) {
      const prods = (await kv.get<Product[]>(KEY_PRODUCTS)) ?? [];
      await kv.set(KEY_PRODUCTS, [newProd, ...prods]);
      return newProd;
    }

    const local = await readLocal();
    local.products = [newProd, ...local.products];
    await writeLocal(local);
    return newProd;
  },

  async updateProduct(id: string, data: Partial<Product>) {
    const list = hasKV
      ? ((await kv.get<Product[]>(KEY_PRODUCTS)) ?? [])
      : (await readLocal()).products;

    const idx = list.findIndex((p) => p.id === id);
    if (idx === -1) return null;

    list[idx] = {
      ...list[idx],
      ...data,
      price: data.price !== undefined ? toNumber(data.price) : list[idx].price,
    };

    if (hasKV) await kv.set(KEY_PRODUCTS, list);
    else await writeLocal({ ...(await readLocal()), products: list });

    return list[idx];
  },

  async deleteProduct(id: string) {
    if (hasKV) {
      const prods = (await kv.get<Product[]>(KEY_PRODUCTS)) ?? [];
      await kv.set(KEY_PRODUCTS, prods.filter((p) => p.id !== id));
      return true;
    }

    const local = await readLocal();
    local.products = local.products.filter((p) => p.id !== id);
    await writeLocal(local);
    return true;
  },
};
