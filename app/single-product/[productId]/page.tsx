import ReviewList from "@/components/all-reviews";
import ProductDetailsSection from "@/components/product-details-section";
import { Separator } from "@/components/ui/separator";
import { Star } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function ProductDetail() {
  return (
    <>
      <ProductDetailsSection />
      <ReviewList />
    </>
  );
}
