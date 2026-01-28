import ProductList from "./product-list";
import { Button } from "./ui/button";
import ProductCard from "./ui/product-card";

export default function NewArrival() {
  return (
    <div id="arrival" className="px-2 md:px-8 lg:px-20 py-14">
      <h2 className="text-3xl md:text-4xl lg:text-5xl lg:mb-16 font-bold text-center mb-8 ">
        New Arrival
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
