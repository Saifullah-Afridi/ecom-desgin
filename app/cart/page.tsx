import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ArrowRight, Pen, Trash } from "lucide-react";
import Image from "next/image";

export default function CartPage() {
  return (
    <div className="px-4 md:px-8 lg:px-20 mx-auto w-full max-w-7xl bg-white my-20 ">
      <h1 className="text-3xl font-semibold border-2 ">Your Cart</h1>
      <div className="flex flex-col lg:flex-row gap-4 ">
        <div className=" w-full lg:w-2/3">
          <div className="border border-gray-400 p-4 rounded-xl mt-6 flex flex-col gap-4">
            <div className="flex gap-4 ">
              <div className=" w-32 relative">
                <Image
                  src="/cart.jpg"
                  alt="cart item"
                  className="object-cover"
                  fill
                />
              </div>
              <div className="flex-1">
                <div className="flex justify-between">
                  <div>
                    <h3 className="text-lg font-semibold ">
                      Gradient Graphic T-shirt
                    </h3>
                    <p className="text-gray-400">Size: Large</p>
                    <p className=" text-gray-400 ">Color: White</p>
                  </div>
                  <Trash className="fill-red-500 text-red-500" />
                </div>
                <div className="flex items-center justify-between ">
                  <span className="font-semibold"> $145</span>
                  <div className=" w-48 bg-gray-300 px-6 rounded-full py-3   flex items-center justify-between">
                    <span className="cursor-pointer  px-2 ">-</span>
                    <span className="cursor-pointer  px-2 ">1</span>
                    <span className="cursor-pointer px-2 ">+</span>
                  </div>
                </div>
              </div>
            </div>
            <Separator />
            <div className="flex gap-4 ">
              <div className=" w-32 relative">
                <Image
                  src="/cart.jpg"
                  alt="cart item"
                  className="object-cover"
                  fill
                />
              </div>
              <div className="flex-1">
                <div className="flex justify-between">
                  <div>
                    <h3 className="text-lg font-semibold ">
                      Gradient Graphic T-shirt
                    </h3>
                    <p className="text-gray-400">Size: Large</p>
                    <p className=" text-gray-400 ">Color: White</p>
                  </div>
                  <Trash className="fill-red-500 text-red-500" />
                </div>
                <div className="flex items-center justify-between ">
                  <span className="font-semibold"> $145</span>
                  <div className=" w-48 bg-gray-300 px-6 rounded-full py-3   flex items-center justify-between">
                    <span className="cursor-pointer  px-2 ">-</span>
                    <span className="cursor-pointer  px-2 ">1</span>
                    <span className="cursor-pointer px-2 ">+</span>
                  </div>
                </div>
              </div>
            </div>
            <Separator />
            <div className="flex gap-4 ">
              <div className=" w-32 relative">
                <Image
                  src="/cart.jpg"
                  alt="cart item"
                  className="object-cover"
                  fill
                />
              </div>
              <div className="flex-1">
                <div className="flex justify-between">
                  <div>
                    <h3 className="text-lg font-semibold ">
                      Gradient Graphic T-shirt
                    </h3>
                    <p className="text-gray-400">Size: Large</p>
                    <p className=" text-gray-400 ">Color: White</p>
                  </div>
                  <Trash className="fill-red-500 text-red-500" />
                </div>
                <div className="flex items-center justify-between ">
                  <span className="font-semibold"> $145</span>
                  <div className=" w-48 bg-gray-300 px-6 rounded-full py-3   flex items-center justify-between">
                    <span className="cursor-pointer  px-2 ">-</span>
                    <span className="cursor-pointer  px-2 ">1</span>
                    <span className="cursor-pointer px-2 ">+</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full  lg:w-1/3 border  border-gray-400 rounded-xl">
          <div className=" flex flex-col gap-6 p-4">
            <h3 className="font-semibold">Order Summary</h3>
            <div className="flex flex-col gap-1">
              <div className="flex items-center justify-between">
                <span className=" text-gray-600">Subtotal</span>
                <span className="font-semibold">$565</span>
              </div>
              <div className="flex items-center justify-between">
                <span className=" text-gray-600">Discount (-20%)</span>
                <span className="font-semibold text-red-600 strike-through strike-through-red">
                  $565
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className=" text-gray-600">Subtotal</span>
                <span className="font-semibold">$565</span>
              </div>
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <span className=" text-gray-600">Total</span>
              <span className="font-semibold text-lg ">$565</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex-1 flex items-center gap-1 bg-[#F0F0F0] px-2 py-3 rounded-full ">
                <Pen />
                <input
                  className="bg-none border-none outline-none"
                  type="text"
                  placeholder="promo code"
                />
              </div>
              <Button className="py-2">Apply</Button>
            </div>
            <Button className="py-5 rounded-full">
              Go to Checkout <ArrowRight />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
