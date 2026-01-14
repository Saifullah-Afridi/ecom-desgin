import { Star } from "lucide-react";
import Image from "next/image";

export default function ProductCard() {
  return (
    <div className="">
      <div className="w-[198px] md:w-[300px]">
        <Image
          src="/images/new.jpg"
          width="296"
          height="298"
          alt="product picture"
          className="rounded-md object-contain w-full"
        />
      </div>
      <div className="mt-3 flex flex-col gap-1 md:gap-2">
        <span className="font-bold md:text-xl">Vertical striped Shirt</span>
        <div className="flex gap-3 items-center">
          <div className="flex md:gap-1">
            <Star fill="#FFC633" color="#FFC633" className="h-4 md:h-5" />
            <Star fill="#FFC633" color="#FFC633" className="h-4 md:h-5" />
            <Star fill="#FFC633" color="#FFC633" className="h-4 md:h-5" />
            <Star fill="#FFC633" color="#FFC633" className="h-4 md:h-5" />
            <Star fill="#FFC633" color="#FFC633" className="h-4 md:h-5" />
          </div>
          <div>
            <span>
              5.0/ <span> 5</span>
            </span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="font-bold text-xl  md:text-2xl">$212</span>
          <span className="font-bold text-xl  md:text-2xl opacity-40">
            $212
          </span>
          <span className="font-medium py-1 px-3 bg-[#FF33331A] rounded-full text-xs md:text-sm">
            $212
          </span>
        </div>
      </div>
    </div>
  );
}
