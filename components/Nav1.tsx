import { X } from "lucide-react";

export default function Nav1() {
  return (
    <div className="bg-[#000000] relative w-full  py-[11px]">
      <p className="text-center text-white text-[12px] md:text-[14px] ">
        Sign up and get 20% off to your first order.{" "}
        <span className="underline"> Sign Up Now </span>
      </p>
      <span className=" hidden md:block  absolute top-3 right-60 text-white text-5xl ">
        <X />
      </span>
    </div>
  );
}
