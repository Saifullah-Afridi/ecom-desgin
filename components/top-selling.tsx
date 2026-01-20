import ProductList from "./product-list";
import { Button } from "./ui/button";

export default function NewArrival() {
  return (
    <div className="px-2 md:px-8 lg:px-20 py-14 ">
      <h2 className="uppercase font-bold text-3xl md:text-4xl lg:mb-16 lg:text-5xl font-bold text-center mb-8 ">
        Top Selling
      </h2>

      <ProductList />

      <div className="flex justify-center mt-8">
        <Button
          className="h-15 w-46 cursor-pointer rounded-full"
          variant="outline"
        >
          View All
        </Button>
      </div>
    </div>
  );
}
