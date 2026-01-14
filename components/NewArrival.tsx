import ProductList from "./product-list";
import { Button } from "./ui/button";
import ProductCard from "./ui/product-card";

export default function NewArrival() {
  return (
    <div className="px-20 my-12">
      <div className="md:my-16 ">
        <h2 className="text-center text-[32px]  md:text-[48px] mb-[55px]">
          New Arrival
        </h2>
        <ProductList />
        <div className="text-center mt-9">
          <Button
            className="md:w-36 w-full md:h-14  px-20  font-medium  rounded-full border-[#000000] "
            variant="outline"
          >
            View All
          </Button>
        </div>
      </div>
    </div>
  );
}
