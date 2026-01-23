import React from "react";
import { Button } from "./ui/button";
import { ChevronRight, ChevronUp, SlidersVertical } from "lucide-react";
import { Separator } from "./ui/separator";

export default function FilterCategoryList() {
  return (
    <div className="hidden lg:block lg:flex-1  border rounded-xl p-6">
      <div className="flex items-center justify-between">
        <h2 className="text-satoshi text-xl font-bold text-black leading-[100%] tracking-wide">
          Filter
        </h2>
        <Button variant="ghost" className="cursor-pointer rounded-full ">
          <SlidersVertical />
        </Button>
      </div>
      <Separator className="my-6" />
      <div className="flex flex-col gap-5">
        <span className="flex items-center justify-between text-muted-foreground">
          T-Shirts <ChevronRight />
        </span>
        <span className="flex items-center justify-between text-muted-foreground">
          Shorts <ChevronRight />
        </span>
        <span className="flex items-center justify-between text-muted-foreground">
          Shirts <ChevronRight />
        </span>

        <span className="flex items-center justify-between text-muted-foreground">
          Hoodies
          <ChevronRight />
        </span>
        <span className="flex items-center justify-between text-muted-foreground">
          Jeans <ChevronRight />
        </span>
      </div>
      <Separator className="my-6" />
      <div className="flex flex-col gap-5">
        <h3 className="flex items-center justify-between text-satoshi text-xl font-bold text-black leading-[100%] tracking-wide ">
          Sizes <ChevronUp />
        </h3>
        <div className="grid grid-cols-3 gap-4">
          <Button
            className="bg-gray-100 rounded-full text-muted-foreground"
            variant="outline"
          >
            XX-Small
          </Button>
          <Button
            className="bg-gray-100 rounded-full text-muted-foreground"
            variant="outline"
          >
            X-Small
          </Button>
          <Button
            className="bg-gray-100 rounded-full text-muted-foreground"
            variant="outline"
          >
            Small
          </Button>
          <Button
            className="bg-gray-100 rounded-full text-muted-foreground"
            variant="outline"
          >
            Medium
          </Button>
          <Button
            className="bg-gray-100 rounded-full text-muted-foreground"
            variant="outline"
          >
            Large
          </Button>
          <Button
            className="bg-gray-100 rounded-full text-muted-foreground"
            variant="outline"
          >
            X-Large
          </Button>
          <Button
            className="bg-gray-100 rounded-full text-muted-foreground"
            variant="outline"
          >
            XX-Large
          </Button>
          <Button
            className="bg-gray-100 rounded-full text-muted-foreground"
            variant="outline"
          >
            2X-Large
          </Button>
          <Button
            className="bg-gray-100 rounded-full text-muted-foreground"
            variant="outline"
          >
            3X-Large
          </Button>
          <Button
            className="bg-gray-100 rounded-full text-muted-foreground"
            variant="outline"
          >
            X4-Large
          </Button>
        </div>
      </div>
      <Separator className="my-6" />
      <div className="flex flex-col gap-5">
        <h3 className="flex items-center justify-between text-satoshi text-xl font-bold text-black leading-[100%] tracking-wide ">
          Casual <ChevronUp />
        </h3>
        <div className="flex flex-col gap-5">
          <span className="flex items-center justify-between text-muted-foreground">
            Formal <ChevronRight />
          </span>
          <span className="flex items-center justify-between text-muted-foreground">
            Party <ChevronRight />
          </span>
          <span className="flex items-center justify-between text-muted-foreground">
            Gym
            <ChevronRight />
          </span>

          <span className="flex items-center justify-between text-muted-foreground">
            Hoodies
            <ChevronRight />
          </span>
          <span className="flex items-center justify-between text-muted-foreground">
            Jeans <ChevronRight />
          </span>
        </div>
      </div>
      <Button className="w-full  leading-[100%] font-medium p-6 rounded-full my-10 ">
        Apply Filter
      </Button>
    </div>
  );
}
