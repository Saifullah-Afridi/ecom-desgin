import Brands from "@/components/Brands";
import HeroSection from "@/components/HeroSection";
import Nav1 from "@/components/Nav1";
import Navbar from "@/components/Navbar";
import NewArrival from "@/components/NewArrival";
import TopSelling from "@/components/top-selling";
import { Separator } from "@/components/ui/separator";

export default function page() {
  return (
    <div className="">
      <Nav1 />
      <Navbar />
      <HeroSection />
      <Brands />
      <NewArrival />
      <div className="px-20">
        <Separator className="my-[64px]   " />
      </div>
      <TopSelling />
    </div>
  );
}
