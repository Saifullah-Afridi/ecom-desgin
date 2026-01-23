import { Star } from "lucide-react";
import Image from "next/image";

export default function CategoryProductCard() {
  return (
    <div className="flex flex-col gap-2 p-3">
      <div className="w-full h-[150px]  md:h-[300px] relative bg-gray-100 rounded-lg">
        <Image
          src="/images/small2.jpg"
          fill
          alt="product image"
          className="object-cover"
        />
      </div>
      <p className="text-base md:text-lg  font-semibold leading-tight">
        Checkered Shirt
      </p>
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-1">
          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
        </div>
        <div className="flex items-center">
          <span className="text-satoshi text-xs md:text-base">3.5/</span>
          <span className="text-satoshi opacity-60 text-xs md:text-base ">
            5
          </span>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-lg font-semibold">$145</span>
        <span className="text-sm line-through text-muted-foreground">$145</span>
        <span className="text-xs bg-red-100 text-red-600 px-2 py-0.5 rounded-full">
          20%
        </span>
      </div>
    </div>
  );
}
