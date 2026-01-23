import CategoryProductCard from "@/components/category-product-card";
import FilterCategoryList from "@/components/filters-list";
import { Button } from "@/components/ui/button";
import { SlidersVertical } from "lucide-react";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Separator } from "@/components/ui/separator";

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
              <CategoryProductCard />
              <CategoryProductCard />
              <CategoryProductCard />
              <CategoryProductCard />
              <CategoryProductCard />
              <CategoryProductCard />
            </div>
            <Separator className="my-2" />
            <Pagination className="w-full">
              <PaginationContent className="w-full flex justify-between gap-5 py-2">
                {/* Previous */}
                <div>
                  <PaginationItem>
                    <PaginationPrevious asChild>
                      <button>Previous</button>
                    </PaginationPrevious>
                  </PaginationItem>
                </div>

                {/* Page numbers */}
                <div className="flex items-center gap-2">
                  <PaginationItem>
                    <PaginationLink asChild>
                      <button>1</button>
                    </PaginationLink>
                  </PaginationItem>

                  <PaginationItem>
                    <PaginationLink asChild isActive>
                      <button>2</button>
                    </PaginationLink>
                  </PaginationItem>

                  <PaginationItem>
                    <PaginationLink asChild>
                      <button>3</button>
                    </PaginationLink>
                  </PaginationItem>

                  <PaginationItem>
                    <PaginationEllipsis />
                  </PaginationItem>
                </div>

                {/* Next */}
                <PaginationItem>
                  <PaginationNext asChild>
                    <button>Next</button>
                  </PaginationNext>
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </div>
      </div>
    </div>
  );
}
