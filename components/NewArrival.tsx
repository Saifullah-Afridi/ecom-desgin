import { Button } from "./ui/button";
import ProductCard from "./ui/productCard";

export default function NewArrival() {
  return (
    <div className="min-w-full">
      <div className="w-full my-[50px]  md:my-[73px] ">
        <h2 className="text-center text-[32px]  md:text-[48px] mb-[55px]">
          New Arrival
        </h2>
        <div className=" w-full grid grid-cols-2 md:px-20 space-x-5 space-y-10  md:grid-cols-4">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
        <div className="text-center px-6">
          <Button
            className="w-full md:w-0 px-[80px] rounded-full border-[2px] mt-[36px] py-5 font-medium text-[16px]"
            variant="outline"
          >
            View All
          </Button>
        </div>
      </div>
    </div>
  );
}
