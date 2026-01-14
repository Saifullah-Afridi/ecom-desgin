import ProductList from "./product-list";
import { Button } from "./ui/button";

export default function TopSelling() {
  return (
    <div className="px-20 my-16">
      <div className="border-b-blue-900 ">
        <h2 className="text-center uppercase text-[32px]  md:text-[48px] mb-[55px]">
          top selling
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
