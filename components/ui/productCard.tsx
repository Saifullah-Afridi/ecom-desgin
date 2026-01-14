import { Star } from "lucide-react";
import Image from "next/image";

export default function ProductCard() {
  return (
    <div>
      <Image
        src="/images/new.jpg"
        width="296"
        height="444"
        alt="New arrival picture"
        className="rounded-[20px]"
      />
      <p className="font-bold  text-[16px]  md:text-[20px] mt-4 tracking-0 ">
        T-Shirt with Tape Details
      </p>
      <div className="flex items-center gap-3">
        <div className="flex">
          <Star
            fill="yellow"
            color="yellow"
            className="h-[15px] w-[15px] md:h-[18px] md:w-[18px]"
          />
          <Star
            fill="yellow"
            color="yellow"
            className="h-[15px] w-[15px] md:h-[18px] md:w-[18px]"
          />
          <Star
            fill="yellow"
            color="yellow"
            className="h-[15px] w-[15px] md:h-[18px] md:w-[18px]"
          />
          <Star
            fill="yellow"
            color="yellow"
            className="h-[15px] w-[15px] md:h-[18px] md:w-[18px]"
          />
          <Star
            fill="yellow"
            color="yellow"
            className="h-[15px] w-[15px] md:h-[18px] md:w-[18px]"
          />
        </div>
        <span className="text-[12px]  md:text-[14px]">
          {" "}
          4.5/<span className="font-light">5</span>{" "}
        </span>
      </div>
      <div className="space-x-2 flex items-center mt-2">
        <span className="md:text-[24px] text-[20px]  font-bold tracking-0">
          $120
        </span>
        <span className="md:text-[24px] text-[20px] font-bold tracking-0 opacity-40">
          $120
        </span>
        <span className="font-bold tracking-0 rounded-full md:text-[12px] text-[10px] font-medium  bg-[#FF33331A] px-[13px] py-[6px]">
          $120
        </span>
      </div>
    </div>
  );
}
