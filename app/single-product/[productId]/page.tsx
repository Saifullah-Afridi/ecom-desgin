import { Separator } from "@/components/ui/separator";
import { Check, Star } from "lucide-react";

export default function ProductDetails() {
  return (
    <div className="w-full max-w-7xl px-4 md:px-8 lg:px-20 mx-auto mt-30">
      <div className="flex flex-col md:flex-row gap-4 mb-10">
        <div className="w-full">
          <img
            src="/images/single-product-image.jpg"
            alt="Product Image"
            className="object-cover w-full"
          />
          <div className="flex gap-0.5 mt-1">
            <img
              src="/images/single-product-image.jpg"
              alt="Product Image"
              className="w-[33%] object-cover"
            />
            <img
              src="/images/single-product-image.jpg"
              alt="Product Image"
              className="w-[33%] object-cover"
            />
            <img
              src="/images/single-product-image.jpg"
              alt="Product Image"
              className="w-[33%] object-cover"
            />
          </div>
        </div>
        <div className="w-full flex flex-col gap-4">
          <h1 className="font-bold text-2xl">One Life Graphic T-shirt</h1>
          <div className="flex items-center gap-1">
            <div className="flex items-center gap-1">
              <Star fill="yellow" color="yellow" />
              <Star fill="yellow" color="yellow" />
              <Star fill="yellow" color="yellow" />
              <Star fill="yellow" color="yellow" />
              <Star fill="yellow" color="yellow" />
            </div>
            <div className="flex items-center">
              <span className="text-sm">4.5</span>
              <span>/</span>
              <span className="text-sm opacity-60">5</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-bold text-2xl">$300</span>
            <span className="font-bold text-2xl opacity-60">$300</span>
            <span className="py-1 px-3 rounded-full bg-red-100 text-red-700">
              $300
            </span>
          </div>
          <p className="text-sm opacity-60 leading-5">
            This graphic t-shirt which is perfect for any occasion. Crafted from
            a soft and breathable fabric, it offers superior comfort and style.
          </p>
          <Separator />
          <div className="flex flex-col gap-4">
            <span className="text-sm opacity-60">Select Colors</span>
            <div className="flex gap-3 items-center">
              <span className="p-3 rounded-full bg-gray-500 ">
                <Check color="white" />
              </span>
              <span className="p-3 rounded-full bg-gray-500 ">
                <Check />
              </span>
              <span className="p-3 rounded-full bg-gray-500">
                <Check />
              </span>
            </div>
          </div>

          <Separator />
          <div className="flex flex-col gap-4">
            <span className="text-sm opacity-60">Choose Size</span>
            <div className="flex gap-2">
              <span className="p-4 rounded-full bg-gray-500    flex items-center justify-center  flex-1">
                Small
              </span>
              <span className="flex items-center justify-center    rounded-full bg-gray-500  flex-1">
                Medium
              </span>
              <span className=" rounded-full bg-gray-500 flex    items-center justify-center flex-1">
                Large
              </span>
              <span className=" rounded-full bg-gray-500 flex    items-center justify-center  flex-1">
                Large
              </span>
            </div>
          </div>
          <Separator />
          <div className="flex gap-3 ">
            <div className="flex-1 bg-gray-400 px-4 flex gap-1 items-center py-3 rounded-full">
              <button>-</button>
              <span>1</span>
              <button>+</button>
            </div>
            <button className="flex-2 bg-black py-3 text-white rounded-full">
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
