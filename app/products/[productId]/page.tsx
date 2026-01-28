import ProductDetail from "@/components/product-detail";
import ProductDetailTabs from "@/components/product-detail-tab";

export default function ProductDetailsPage() {
  return (
    <div className="w-full max-w-7xl px-2 md:px-8 lg:px-20 mx-auto mt-32">
      <ProductDetail />
      <ProductDetailTabs />
    </div>
  );
}
