import Brands from "@/components/Brands";
import HeroSection from "@/components/HeroSection";
import Nav1 from "@/components/Nav1";
import Navbar from "@/components/Navbar";
import NewsLetter from "@/components/new-letter";
import NewArrival from "@/components/NewArrival";
import TopSelling from "@/components/top-selling";
import BrowseByDressStyle from "@/components/ui/browse-by-dress-style";
import { Separator } from "@/components/ui/separator";

export default function page() {
  return (
    <div className="">
      <Navbar />
      <HeroSection />
      <Brands />
      <NewArrival />
      <Separator className="my-15" />
      <TopSelling />
      <BrowseByDressStyle />
    </div>
  );
}
