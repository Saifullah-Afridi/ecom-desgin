import ProductCard from "./ui/product-card";
import NewCard from "./ui/product-card";

export default function ProductList() {
  return (
    <div className="flex flex-wrap gap-5 space-y-5">
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </div>
  );
}
