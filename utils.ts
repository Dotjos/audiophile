import dbData from "./public/db.json";

export function getProductBySlug(slug: string): Product {
  return dbData.data.find((p: Product) => p.slug === slug)!;
}

export function getProductsByCategory(category: string): Product[] {
  return dbData.data.filter(
    (product: Product) =>
      product.category.toLowerCase() === category.toLowerCase()
  );
}

export function getShortProductName(name: string): string {
  // Match from start until we hit a space followed by a letter, or a punctuation
  const match = name.match(/^[A-Z0-9]+/i);
  return match ? match[0] : name;
}

export function calculateVAT(subtotal: number, rate: number = 0.2): number {
  return Math.round(subtotal * rate);
}

export function calculateGrandTotal(
  subtotal: number,
  vat: number,
  shipping: number
): number {
  return subtotal + vat + shipping;
}
