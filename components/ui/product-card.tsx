import { Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function ProductCard({
  id,
  name,
  image,
  rating,
  price,
  originalPrice,
  discount,
}: any) {
  return (
    <Link href={`/products/${id}`}>
      <div className="">
        <Image
          src={image}
          width="150"
          height="150"
          alt={image}
          className="rounded-xl w-full"
        />
      </div>
      <div className="mt-3 flex flex-col gap-1 md:gap-2">
        <span className="font-bold text-xl md:text-xl">{name}</span>
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
              {rating}/ <span> 5</span>
            </span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="font-bold text-xl  md:text-2xl">{price}</span>
          <span className="font-bold text-xl  md:text-2xl opacity-40">
            {originalPrice}
          </span>
          <span className="font-medium py-1 px-3 bg-[#FF33331A] rounded-full text-xs md:text-sm">
            {discount}
          </span>
        </div>
      </div>
    </Link>
  );
}
