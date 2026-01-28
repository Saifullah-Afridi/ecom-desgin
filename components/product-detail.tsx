"use client";

import { productDetails } from "@/lib/data";
import { Check, Star } from "lucide-react";
import { useParams } from "next/navigation";
import { useState } from "react";

export default function ProductDetail() {
  const { productId } = useParams();
  const product = productDetails?.find((product) => product.id === productId);
  const [selectImage, setSelectImage] = useState(product?.image);

  console.log(selectImage);

  return (
    <div className="flex flex-col md:flex-row gap-6 mb-10">
      <div className="md:flex-row md:flex-1   flex  flex-col  gap-3">
        <div className="md:flex-[3]  md:order-2  ">
          <img
            src={selectImage}
            alt={selectImage}
            className="object-cover w-full h-full rounded-xl"
          />
        </div>
        <div className="md:flex-1 flex md:order-1 md:flex-col gap-2">
          <div
            className="aspect-square md:flex-1 "
            onClick={() => setSelectImage("/products/product1.png")}
          >
            <img
              src="/products/product1.png"
              alt="/products/product1.png"
              className="object-cover w-full h-full rounded-xl"
            />
          </div>
          <div
            className="aspect-square md:flex-1 "
            onClick={() => setSelectImage("/images/single-product-image.jpg")}
          >
            <img
              src="/images/single-product-image.jpg"
              alt="Product Image"
              className="object-cover w-full h-full rounded-xl "
            />
          </div>
          <div
            className="aspect-square md:flex-1"
            onClick={() => setSelectImage(product?.image)}
          >
            <img
              src={product?.image}
              alt={product?.image}
              className="object-cover w-full h-full rounded-xl"
            />
          </div>
        </div>
      </div>
      <div className="w-full md:flex-1 flex flex-col gap-4">
        <h1 className="font-bold text-2xl lg:text-5xl leading-[100%] text-satoshi ">
          {product?.name}
        </h1>
        <div className="flex items-center gap-1">
          <div className="flex items-center gap-1">
            <Star fill="yellow" color="yellow" />
            <Star fill="yellow" color="yellow" />
            <Star fill="yellow" color="yellow" />
            <Star fill="yellow" color="yellow" />
            <Star fill="yellow" color="yellow" />
          </div>
          <div className="flex items-center">
            <span className="text-sm">{product?.rating}</span>
            <span>/</span>
            <span className="text-sm opacity-60">5</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="font-bold text-2xl opacity-60">
            {product?.price}$
          </span>
          <span className="font-bold text-2xl">{product?.originalPrice}$</span>
          <span className="py-1 px-3 rounded-full bg-red-100 text-red-700">
            {product?.discount}%
          </span>
        </div>
        <p className="text-sm md:text-lg opacity-60 leading-5 lg:leading-6">
          {product?.description}{" "}
        </p>
        <div className="w-full h-0.5 bg-gray-200"> </div>
        <div className="flex flex-col gap-4">
          <span className="text-sm md:text-base opacity-60">Select Colors</span>
          <div className="flex gap-3 items-center">
            {product?.colors?.map((color) => (
              <span
                key={color?.name}
                className={`p-2 rounded-full bg-[${color?.hex}] `}
              >
                <Check className="text-yellow-400" />
              </span>
            ))}
          </div>
        </div>

        <div className="w-full h-0.5 bg-gray-200"> </div>

        <div className="flex flex-col gap-4">
          <span className="text-sm opacity-60">Choose Size</span>
          <div className="flex gap-2">
            {product?.sizes?.map((size, index) => (
              <span
                key={index}
                className="py-3  rounded-full bg-gray-500  flex items-center justify-center  flex-1"
              >
                {size}
              </span>
            ))}
          </div>
        </div>
        <div className="w-full h-0.5 bg-gray-200"></div>

        <div className="flex gap-3">
          <div className="flex-1 bg-gray-400 px-4 flex  justify-between gap-3 items-center py-3 rounded-full">
            <button>-</button>
            <span>1</span>
            <button>+</button>
          </div>
          <button className="flex-[2] bg-black py-3 text-white rounded-full">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}
