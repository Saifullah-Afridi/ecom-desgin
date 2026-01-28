import Image from "next/image";
import Rating45Icon from "./icons/rating-4-5.svg";
import Rating35Icon from "./icons/rating-3-5.svg";
import Rating5Icon from "./icons/rating-5.svg";
import Rating4Icon from "./icons/rating-4.svg";
import Rating3Icon from "./icons/rating-3.svg";

interface ProductCardProps {
  image: string;
  title: string;
  rating: number;
  ratingText: string;
  price: number;
  originalPrice?: number;
  discount?: number;
}

const ratingIcons = {
  4.5: Rating45Icon,
  3.5: Rating35Icon,
  5.0: Rating5Icon,
  4.0: Rating4Icon,
  3.0: Rating3Icon,
};

export default function ProductCard({
  image,
  title,
  rating,
  ratingText,
  price,
  originalPrice,
  discount,
}: ProductCardProps) {
  const RatingIcon = ratingIcons[rating as keyof typeof ratingIcons];

  return (
    <div className="flex flex-col gap-3">
      <div className="relative aspect-square w-full overflow-hidden rounded-md bg-light-gray">
        <Image src={image} alt={title} fill className="object-cover" />
      </div>
      <h3 className="text-satoshi text-[20px] font-bold text-black">{title}</h3>
      <div className="flex items-center gap-4">
        {RatingIcon && <RatingIcon className="h-5" />}
        <span className="text-satoshi text-[14px] text-black">
          {ratingText}
        </span>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-satoshi text-[24px] font-bold text-black">
          ${price}
        </span>
        {originalPrice && (
          <>
            <span className="text-satoshi text-[24px] font-bold text-gray-60 line-through">
              ${originalPrice}
            </span>
            {discount && (
              <span className="text-satoshi rounded-full bg-red/10 px-[ py-4 text-sm font-medium text-red">
                -{discount}%
              </span>
            )}
          </>
        )}
      </div>
    </div>
  );
}
