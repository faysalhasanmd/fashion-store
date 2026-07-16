import products from "@/data/products";

export async function generateMetadata({ params }) {
  const { id } = await params;
  const product = products.find((p) => p.id === Number(id));

  return {
    title: product ? `${product.name} || Oxivos` : "Product Not Found",
    description: product?.description,
  };
}

export default function ProductDetailsLayout({ children }) {
  return children;
}
