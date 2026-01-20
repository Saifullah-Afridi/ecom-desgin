import { Separator } from "@/components/ui/separator";
import { Star } from "lucide-react";
import Image from "next/image";
import React from "react";
export default function ProductDetail() {
  return (
    <div className="px-20 mt-14">
      {" "}
      <div className="grid grid-cols-2 gap-10">
        {" "}
        <div className="flex items-center gap-2 ">
          {" "}
          <div className="flex flex-col gap-3">
            {" "}
            <Image
              src="/images/small2.jpg"
              alt="small image"
              width={152}
              height={167}
            />{" "}
            <Image
              src="/images/small2.jpg"
              alt="small image"
              width={152}
              height={167}
            />{" "}
            <Image
              src="/images/small2.jpg"
              alt="small image"
              width={152}
              height={167}
            />{" "}
          </div>{" "}
          <div className="relative w-[444px] h-[480px] ">
            {" "}
            <Image
              src="/images/single-product-image.jpg"
              alt="Product Image"
              fill
              className="object-cover rounded-xl "
            />{" "}
          </div>{" "}
        </div>{" "}
        <div className="flex flex-col gap-3">
          {" "}
          <h1 className="font-bold text-4xl leading-[100%]">
            {" "}
            One Life Graphic T-shirt{" "}
          </h1>{" "}
          <div className="flex gap-2 items-center">
            {" "}
            <div className="flex gap-2">
              {" "}
              <Star
                className="inline-block text-yellow-400 "
                fill="yellow"
              />{" "}
              <Star className="inline-block text-yellow-400 " fill="yellow" />{" "}
              <Star className="inline-block text-yellow-400 " fill="yellow" />{" "}
              <Star className="inline-block text-yellow-400 " fill="yellow" />{" "}
              <Star
                className="inline-block text-yellow-400 "
                fill="yellow"
              />{" "}
            </div>{" "}
            <div>
              {" "}
              <span>
                {" "}
                4.5/<span className="text-muted-foreground">5</span>{" "}
              </span>{" "}
            </div>{" "}
          </div>{" "}
          <div className="flex items-center gap-3">
            {" "}
            <span className="font-bold text-3xl">$260</span>{" "}
            <span className="font-bold text-3xl text-gray-400 ">$300</span>{" "}
            <span className="bg-[#FF33331A] px-4 py-1 rounded-full">
              -40%
            </span>{" "}
          </div>{" "}
          <p className="opacity-70 text-sm">
            {" "}
            This graphic t-shirt which is perfect for any occasion. Crafted from
            a soft and <br /> breathable fabric, it offers superior comfort and
            style.{" "}
          </p>{" "}
          <Separator />{" "}
          <div>
            {" "}
            <span className="opacity-60">Select Colors</span>{" "}
            <div className="flex gap-4 mt-4 ">
              {" "}
              <div className="w-9 h-9 rounded-full bg-gray-800"></div>{" "}
              <div className="w-9 h-9 rounded-full bg-gray-800"></div>{" "}
              <div className="w-9 h-9 rounded-full bg-gray-800"></div>{" "}
            </div>{" "}
          </div>{" "}
          <Separator />{" "}
          <div>
            {" "}
            <span className="opacity-60">Select Size</span>{" "}
            <div className="flex gap-4 mt-4 ">
              {" "}
              <span className="bg-[#F0F0F0] py-2 px-6 rounded-full ">
                {" "}
                <span className="opacity-60">Small</span>{" "}
              </span>{" "}
              <span className="bg-[#F0F0F0] py-2 px-6 rounded-full ">
                {" "}
                <span className="opacity-60">Medium</span>{" "}
              </span>{" "}
              <span className="bg-[#F0F0F0] py-2 px-6 rounded-full ">
                {" "}
                <span className="opacity-60">Large</span>{" "}
              </span>{" "}
              <span className="bg-[#F0F0F0] py-2 px-6 rounded-full ">
                {" "}
                <span className="opacity-60">X-Large</span>{" "}
              </span>{" "}
            </div>{" "}
          </div>{" "}
          <Separator className="mb-3" />{" "}
          <div className="flex items-center gap-5">
            {" "}
            <div className="bg-[#F0F0F0] flex items-center px-9 py-3 rounded-full gap-9">
              {" "}
              <button>-</button> <span>1</span> <button>+</button>{" "}
            </div>{" "}
            <button className="bg-black py-3 rounded-full text-white flex-1 ">
              {" "}
              Add to Cart{" "}
            </button>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}
