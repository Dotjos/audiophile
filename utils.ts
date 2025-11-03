export async function getProductsByCategory(
  category: string
): Promise<Product[]> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"}/db.json`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  const dbData: DbData = await res.json();

  // Filter products by category
  return dbData.data.filter(
    (product) => product.category.toLowerCase() === category.toLowerCase()
  );
}

export async function getProductBySlug(slug: string): Promise<Product> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"}/db.json`,
    {
      cache: "no-store",
    }
  );
  const dbData = await res.json();
  const products = dbData.data;
  return products.find((p: any) => p.slug === slug);
}
