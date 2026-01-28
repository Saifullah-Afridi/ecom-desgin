"use client";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ArrowRight, Pen, Trash } from "lucide-react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "@/store/store";
import { removeItem, updateQuantity } from "@/store/slices/cart-slice";

export default function CartPage() {
  const dispatch = useDispatch<AppDispatch>();
  const items = useSelector((state: RootState) => state.cart.items);

  const subtotal = items.reduce((sum, item) => sum + item.totalPrice, 0);
  const discount = 0;
  const total = subtotal - discount;

  return (
    <div className="px-4 md:px-8 lg:px-20 mx-auto w-full max-w-7xl bg-white my-20 ">
      <h1 className="text-3xl font-semibold my-6 ">Your Cart</h1>
      <div className="flex flex-col lg:flex-row gap-4 ">
        <div className=" w-full lg:w-2/3">
          <div className="border border-gray-400 p-4 rounded-xl  flex flex-col gap-4">
            {items.length === 0 && (
              <div className="py-10 text-center text-gray-500">
                Your cart is empty.
              </div>
            )}
            {items.map((item, index) => (
              <div key={`${item.id}-${item.size}-${item.color}`}>
                {index > 0 && <Separator />}
                <div className="flex gap-4 py-4">
                  <div className="w-32 relative">
                    <Image
                      src={item.image}
                      alt={item.name}
                      className="object-cover"
                      fill
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <div>
                        <h3 className="text-lg font-semibold ">{item.name}</h3>
                        <p className="text-gray-400">Size: {item.size}</p>
                        <p className="text-gray-400 flex items-center gap-2">
                          Color:
                          <span
                            className="inline-block h-4 w-4 rounded-full border"
                            style={{ backgroundColor: item.color }}
                          />
                        </p>
                      </div>
                      <button
                        className="text-red-500"
                        onClick={() =>
                          dispatch(
                            removeItem({
                              id: item.id,
                              size: item.size,
                              color: item.color,
                            }),
                          )
                        }
                        aria-label="Remove item"
                      >
                        <Trash className="fill-red-500 text-red-500" />
                      </button>
                    </div>
                    <div className="flex items-center justify-between ">
                      <span className="font-semibold">${item.price}</span>
                      <div className="w-48 bg-gray-300 px-6 rounded-full py-3 flex items-center justify-between">
                        <button
                          className="cursor-pointer px-2 text-lg"
                          onClick={() =>
                            dispatch(
                              updateQuantity({
                                id: item.id,
                                size: item.size,
                                color: item.color,
                                quantity: item.quantity - 1,
                              }),
                            )
                          }
                        >
                          -
                        </button>
                        <span className="cursor-pointer px-2 text-lg">
                          {item.quantity}
                        </span>
                        <button
                          className="cursor-pointer px-2 text-lg"
                          onClick={() =>
                            dispatch(
                              updateQuantity({
                                id: item.id,
                                size: item.size,
                                color: item.color,
                                quantity: item.quantity + 1,
                              }),
                            )
                          }
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full  lg:w-1/3 border  border-gray-400 rounded-xl">
          <div className=" flex flex-col gap-6 p-4">
            <h3 className="font-semibold">Order Summary</h3>
            <div className="flex flex-col gap-1">
              <div className="flex items-center justify-between">
                <span className=" text-gray-600">Subtotal</span>
                <span className="font-semibold">${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className=" text-gray-600">Discount (-20%)</span>
                <span className="font-semibold text-red-600 strike-through strike-through-red">
                  ${discount.toFixed(2)}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className=" text-gray-600">Shipping</span>
                <span className="font-semibold">$0.00</span>
              </div>
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <span className=" text-gray-600">Total</span>
              <span className="font-semibold text-lg ">
                ${total.toFixed(2)}
              </span>
            </div>
            <div className="flex items-center  justify-between">
              <div className="flex-1 flex items-center h-10 gap-1 bg-[#F0F0F0] px-2  rounded-full ">
                <Pen className="h-4 w-4" />
                <input
                  className="bg-none border-none outline-none"
                  type="text"
                  placeholder="promo code"
                />
              </div>
              <Button className="h-full py-3">Apply</Button>
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
