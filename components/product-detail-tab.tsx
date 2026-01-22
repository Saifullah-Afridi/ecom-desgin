"use client";

import { ArrowDown, Check, Sliders, Star } from "lucide-react";
import { Button } from "./ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Card } from "./ui/card";
export default function ProductDetailTabs() {
  return (
    <div className="my-20 w-full    ">
      <Tabs defaultValue="rating-and-reviews" className="w-full">
        <TabsList className=" bg-white md:flex md:justify-around md:gap-7 w-full ">
          <TabsTrigger
            value="product-details"
            className=" text-base text-satoshi font-medium md:text-xl"
          >
            Product Details
          </TabsTrigger>
          <TabsTrigger
            value="rating-and-reviews"
            className=" text-base text-satoshi font-medium md:text-xl  data-[state=active]:border-b-2 data-[state=active]:ring-0 data-[state=active]:border-b-black  
    data-[state=active]:font-semibold "
          >
            Rating and Reviews
          </TabsTrigger>
          <TabsTrigger
            value="faqs"
            className="text-base text-satoshi  font-medium md:text-xl"
          >
            FAQs
          </TabsTrigger>
        </TabsList>
        <TabsContent value="rating-and-reviews" className="mt-6">
          <div className="flex justify-between  items-center">
            <span className="font-bold text-satoshi text-lg md:text-2xl">
              All Reviews (451)
            </span>
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                className=" bg-gray-300 rounded-full py-6  md:px-12 "
              >
                <Sliders size={14} className="text-base" />
              </Button>
              <Button className="hidden py-6  md:px-16 md:flex items-center  rounded-full md:py-7 border-2 ">
                Latest <ArrowDown className="ml-auto" size={14} />
              </Button>
              <Button className="py-6  px-6 md:px-12 rounded-full md:py-7 border-2 ">
                Write a Review
              </Button>
            </div>
          </div>
          <div className="mt-8">
            <div className="grid grid-cols-1 gap-5 md:6 md:grid-cols-2">
              <Card className="p-6 md:7">
                <div className="flex gap-3 items-start flex-col">
                  <div className="flex gap-1">
                    <Star
                      color="yellow"
                      size={15}
                      className=" text-yellow-300"
                    />
                    <Star
                      color="yellow"
                      size={15}
                      className=" text-yellow-300  "
                    />
                    <Star
                      size={15}
                      color="yellow"
                      className=" text-yellow-300 text-sm "
                    />
                    <Star
                      size={15}
                      color="yellow"
                      className=" text-yellow-300  "
                    />
                    <Star
                      size={15}
                      color="yellow"
                      className=" text-yellow-300 "
                    />
                    <Star
                      size={15}
                      color="yellow"
                      className=" text-yellow-300  "
                    />
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-satoshi leading-5">
                      Samantha D.
                    </span>
                    <span className="rounded-full  bg-green-400">
                      <Check className="text-sm" />
                    </span>
                  </div>
                  <p className="text-sm leading-4 font-light">
                    "I absolutely love this t-shirt! The design is unique and
                    the fabric feels so comfortable. As a fellow designer, I
                    appreciate the attention to detail. It's become my favorite
                    go-to shirt."
                  </p>
                  <p>Posted on August 14, 2023</p>
                </div>
              </Card>
              <Card className="p-6">
                <div className="flex gap-3 items-start flex-col">
                  <div className="flex gap-1">
                    <Star
                      color="yellow"
                      size={15}
                      className=" text-yellow-300"
                    />
                    <Star
                      color="yellow"
                      size={15}
                      className=" text-yellow-300  "
                    />
                    <Star
                      size={15}
                      color="yellow"
                      className=" text-yellow-300 text-sm "
                    />
                    <Star
                      size={15}
                      color="yellow"
                      className=" text-yellow-300  "
                    />
                    <Star
                      size={15}
                      color="yellow"
                      className=" text-yellow-300 "
                    />
                    <Star
                      size={15}
                      color="yellow"
                      className=" text-yellow-300  "
                    />
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-satoshi leading-5">
                      Samantha D.
                    </span>
                    <span className="rounded-full  bg-green-400">
                      <Check className="text-sm" />
                    </span>
                  </div>
                  <p className="text-sm leading-4 font-light">
                    "I absolutely love this t-shirt! The design is unique and
                    the fabric feels so comfortable. As a fellow designer, I
                    appreciate the attention to detail. It's become my favorite
                    go-to shirt."
                  </p>
                  <p>Posted on August 14, 2023</p>
                </div>
              </Card>
              <Card className="p-6">
                <div className="flex gap-3 items-start flex-col">
                  <div className="flex gap-1">
                    <Star
                      color="yellow"
                      size={15}
                      className=" text-yellow-300"
                    />
                    <Star
                      color="yellow"
                      size={15}
                      className=" text-yellow-300  "
                    />
                    <Star
                      size={15}
                      color="yellow"
                      className=" text-yellow-300 text-sm "
                    />
                    <Star
                      size={15}
                      color="yellow"
                      className=" text-yellow-300  "
                    />
                    <Star
                      size={15}
                      color="yellow"
                      className=" text-yellow-300 "
                    />
                    <Star
                      size={15}
                      color="yellow"
                      className=" text-yellow-300  "
                    />
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-satoshi leading-5">
                      Samantha D.
                    </span>
                    <span className="rounded-full  bg-green-400">
                      <Check className="text-sm" />
                    </span>
                  </div>
                  <p className="text-sm leading-4 font-light">
                    "I absolutely love this t-shirt! The design is unique and
                    the fabric feels so comfortable. As a fellow designer, I
                    appreciate the attention to detail. It's become my favorite
                    go-to shirt."
                  </p>
                  <p>Posted on August 14, 2023</p>
                </div>
              </Card>
              <Card className="p-6">
                <div className="flex gap-3 items-start flex-col">
                  <div className="flex gap-1">
                    <Star
                      color="yellow"
                      size={15}
                      className=" text-yellow-300"
                    />
                    <Star
                      color="yellow"
                      size={15}
                      className=" text-yellow-300  "
                    />
                    <Star
                      size={15}
                      color="yellow"
                      className=" text-yellow-300 text-sm "
                    />
                    <Star
                      size={15}
                      color="yellow"
                      className=" text-yellow-300  "
                    />
                    <Star
                      size={15}
                      color="yellow"
                      className=" text-yellow-300 "
                    />
                    <Star
                      size={15}
                      color="yellow"
                      className=" text-yellow-300  "
                    />
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-satoshi leading-5">
                      Samantha D.
                    </span>
                    <span className="rounded-full  bg-green-400">
                      <Check className="text-sm" />
                    </span>
                  </div>
                  <p className="text-sm leading-4 font-light">
                    "I absolutely love this t-shirt! The design is unique and
                    the fabric feels so comfortable. As a fellow designer, I
                    appreciate the attention to detail. It's become my favorite
                    go-to shirt."
                  </p>
                  <p>Posted on August 14, 2023</p>
                </div>
              </Card>
              <Card className="p-6">
                <div className="flex gap-3 items-start flex-col">
                  <div className="flex gap-1">
                    <Star
                      color="yellow"
                      size={15}
                      className=" text-yellow-300"
                    />
                    <Star
                      color="yellow"
                      size={15}
                      className=" text-yellow-300  "
                    />
                    <Star
                      size={15}
                      color="yellow"
                      className=" text-yellow-300 text-sm "
                    />
                    <Star
                      size={15}
                      color="yellow"
                      className=" text-yellow-300  "
                    />
                    <Star
                      size={15}
                      color="yellow"
                      className=" text-yellow-300 "
                    />
                    <Star
                      size={15}
                      color="yellow"
                      className=" text-yellow-300  "
                    />
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-satoshi leading-5">
                      Samantha D.
                    </span>
                    <span className="rounded-full  bg-green-400">
                      <Check className="text-sm" />
                    </span>
                  </div>
                  <p className="text-sm leading-4 font-light">
                    "I absolutely love this t-shirt! The design is unique and
                    the fabric feels so comfortable. As a fellow designer, I
                    appreciate the attention to detail. It's become my favorite
                    go-to shirt."
                  </p>
                  <p>Posted on August 14, 2023</p>
                </div>
              </Card>
              <Card className="p-6">
                <div className="flex gap-3 items-start flex-col">
                  <div className="flex gap-1">
                    <Star
                      color="yellow"
                      size={15}
                      className=" text-yellow-300"
                    />
                    <Star
                      color="yellow"
                      size={15}
                      className=" text-yellow-300  "
                    />
                    <Star
                      size={15}
                      color="yellow"
                      className=" text-yellow-300 text-sm "
                    />
                    <Star
                      size={15}
                      color="yellow"
                      className=" text-yellow-300  "
                    />
                    <Star
                      size={15}
                      color="yellow"
                      className=" text-yellow-300 "
                    />
                    <Star
                      size={15}
                      color="yellow"
                      className=" text-yellow-300  "
                    />
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-satoshi leading-5">
                      Samantha D.
                    </span>
                    <span className="rounded-full  bg-green-400">
                      <Check className="text-sm" />
                    </span>
                  </div>
                  <p className="text-sm leading-4 font-light">
                    "I absolutely love this t-shirt! The design is unique and
                    the fabric feels so comfortable. As a fellow designer, I
                    appreciate the attention to detail. It's become my favorite
                    go-to shirt."
                  </p>
                  <p>Posted on August 14, 2023</p>
                </div>
              </Card>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
