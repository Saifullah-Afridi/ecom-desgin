import ProductCard from "./ui/product-card";

export default function ProductList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {[1, 2, 3, 4].map((_, index) => (
        <ProductCard key={index} />
      ))}
    </div>
  );
}
