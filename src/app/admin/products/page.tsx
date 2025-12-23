import ProductsPageClient from "./ProductsPageClient";

type SearchParams = Record<string, string | string[] | undefined>;

export default async function Page({
  searchParams,
}: {
  searchParams?: Promise<SearchParams>;
}) {
  const sp = (await searchParams) ?? {};
  const raw = sp.categoryId;
  const categoryId = Array.isArray(raw) ? raw[0] : raw;

  return <ProductsPageClient categoryId={categoryId} />;
}
