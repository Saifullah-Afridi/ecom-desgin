// import { Star } from "lucide-react";
// import Image from "next/image";

import { Star } from "lucide-react";
import Image from "next/image";

// export default function CategoryProductCard() {
//   return (
//     <div className="flex flex-col gap-2 p-3">
//       <div className="w-full aspect-square relative bg-gray-100 rounded-lg overflow-hidden">
//         <Image
//           src="/images/small2.jpg"
//           fill
//           alt="product image"
//           className="object-cover"
//         />
//       </div>
//       <p className="text-base md:text-lg font-semibold leading-tight">
//         Checkered Shirt
//       </p>
//       <div className="flex items-center gap-3">
//         <div className="flex items-center gap-1">
//           <Star color="yellow" fill="yellow" size={16} />
//           <Star color="yellow" fill="yellow" size={16} />
//           <Star color="yellow" fill="yellow" size={16} />
//           <Star color="yellow" fill="yellow" size={16} />
//           <Star color="yellow" fill="yellow" size={16} />
//         </div>
//         <div className="flex items-center">
//           <span className="text-satoshi text-xs md:text-base">3.5/</span>
//           <span className="text-satoshi opacity-60 text-xs md:text-base ">
//             5
//           </span>
//         </div>
//       </div>
//       <div className="flex items-center gap-2">
//         <span className="text-lg font-semibold">$145</span>
//         <span className="text-sm line-through text-muted-foreground">$145</span>
//         <span className="text-xs bg-red-100 text-red-600 px-2 py-0.5 rounded-full">
//           20%
//         </span>
//       </div>
//     </div>
//   );
// }

export default function CategoryProductCard() {
  return (
    <div className="flex flex-col gap-3 border rounded-xl p-3 bg-[#FFFFFF]">
      <div className="w-full rounded-2xl bg-[#F0EEED] p-4">
        <div className="relative w-full h-[200px]">
          <Image
            src="/images/small2.jpg"
            fill
            alt="product"
            className="object-contain"
          />
        </div>
      </div>

      <p className="text-base font-semibold leading-tight">Checkered Shirt</p>

      <div className="flex items-center gap-2">
        <div className="flex gap-0.5">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
          ))}
        </div>
        <span className="text-sm text-muted-foreground">3.5/5</span>
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
