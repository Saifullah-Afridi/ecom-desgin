import CategoryProductCard from "@/components/category-product-card";
import FilterCategoryList from "@/components/filters-list";
import { Button } from "@/components/ui/button";
import { SlidersVertical } from "lucide-react";

import { Separator } from "@/components/ui/separator";
import { products } from "@/lib/data";
import ProductCard from "@/components/ui/product-card";

export default function CategoryPage() {
  return (
    <div className="px-4 md:px-8 lg:px-20 w-full max-w-7xl my-6 mx-auto bg-white">
      <div className="flex flex-col md:flex-row lg:gap-4">
        <FilterCategoryList />
        <div className="lg:flex-3 flex flex-col gap-8 ">
          <div className="flex justify-between items-center gap-10">
            <div className="flex items-baseline gap-1">
              <h1 className="text-satoshi  text-2xl md:text-4xl font-bold ">
                Casual
              </h1>
              <span className="font-satoshi text-xs">
                Showing 1-10 of 100 Products
              </span>
            </div>
            <Button variant="outline" className="rounded-full bg-gray-100">
              <SlidersVertical />
            </Button>
          </div>

          <div className="">
            <div className="grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-8 grid">
              {products.map((product) => (
                <ProductCard key={product.id} {...product}></ProductCard>
              ))}
            </div>
            <Separator className="my-2" />
            {/* <CustomPagination /> */}
          </div>
        </div>
      </div>
    </div>
  );
}
