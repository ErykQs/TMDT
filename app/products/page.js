import ProductCard from "../../components/ProductCard/ProductCard";
import FeaturedProducts from "../components/FeaturedProducts";

async function getProducts() {
  const res = await fetch("/api/products");
  return res.json();
}

export default async function ProductsPage() {
  const products = await getProducts();
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-8">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <FeaturedProducts />
    </>
  );
}
