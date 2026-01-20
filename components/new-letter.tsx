import { Facebook, Instagram, Mail, Twitter, X } from "lucide-react";
import { Button } from "./ui/button";

export default function NewsLetter() {
  return (
    <div className="h-[500px] mt-[500px] bg-[#F0F0F0] py-[200px] border-5 px-2 md:px-8 lg:px-20  lg:relative">
      <div className="grid grid-cols-5 gap-x-8">
        <div className="flex flex-col gap-5">
          <h2 className="font-bold text-3xl md:text-xl ">SHOP.CO</h2>
          <p className="text-sm">
            We have clothes that suits your style and which you’re proud to
            wear. From women to men.
          </p>
          <div className="flex gap-2 mt-4">
            <Instagram size={24} />
            <Twitter size={24} />
            <Facebook size={24} />
            <Twitter size={24} />
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <h3>Company</h3>
          <div className="flex flex-col gap-3">
            <span>About</span>
            <span>Work</span>
            <span>Feature</span>
            <span>Career</span>
          </div>
        </div>{" "}
        <div className="flex flex-col gap-6">
          <h3>Company</h3>
          <div className="flex flex-col gap-3">
            <span>About</span>
            <span>Work</span>
            <span>Feature</span>
            <span>Career</span>
          </div>
        </div>{" "}
        <div className="flex flex-col gap-6">
          <h3>Company</h3>
          <div className="flex flex-col gap-3">
            <span>About</span>
            <span>Work</span>
            <span>Feature</span>
            <span>Career</span>
          </div>
        </div>{" "}
        <div className="flex flex-col gap-6">
          <h3>Company</h3>
          <div className="flex flex-col gap-3">
            <span>About</span>
            <span>Work</span>
            <span>Feature</span>
            <span>Career</span>
          </div>
        </div>
      </div>
      <div className="lg:absolute lg:-top-40 ml-7
      ">
        <div className=" bg-black text-white px-12 rounded-xl py-12 mt-20 flex gap-10 justify-between items-center">
          <div className="font-bold text-5xl">
            STAY UPTO DATE ABOUT <br /> OUR LATEST OFFERS
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 w-[349px] h-12 bg-white rounded-lg text-gray-600 px-2">
              <Mail />
              <input
                type="email"
                placeholder="Enter your email "
                className="outline-none border-none h-full w-full"
              />
            </div>
            <Button className="h-12  text-black " variant="outline">
              Subscribe to Newsletter
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
