import Image from "next/image";

export default function HeroSection() {
  return (
    <div className=" px-2 min-h-screen bg-[#F2F0F1]     md:bg-[url(/images/HeroSection.png)]  md:bg-center  md:bg-cover md:bg-no-repeat md:overflow-clip    ">
      <div className="container flex    flex-col items-start  pr-4 md:pr-0 md:pl-20 justify-center gap-2 md:gap-8 py-[85px]     ">
        <h1 className=" text-[36px] font-bold md:font-normal md:text-[64px] leading-9  md:leading-16  uppercase">
          FIND CLOTHES
          <br /> THAT MATCHES <br /> YOUR STYLE
        </h1>
        <p className="leading-[22px] text-[14px] md:text-[16px]">
          Browse through our diverse range of meticulously crafted garments,
          designed to <br /> bring out your individuality and cater to your
          sense of style.
        </p>
        <button className="font-medium text-[16px] bg-black text-white px-[67px] py-[15px] rounded-full w-full md:w-auto">
          Shop Now
        </button>

        <div className="flex flex-wrap justify-center  md:flex-nowrap gap-8">
          <div className=" flex flex-col  ">
            <span className="font-bold text-[24px]  md:text-[40px] ">200+</span>
            <span className=" font-light  text-[14px] md:text-[16px]">
              International Brands
            </span>
          </div>
          <div className="w-1 bg-gray-300"></div>
          <div className=" flex flex-col">
            <span className="font-bold text-[24px]  md:text-[40px] ">
              2,000+
            </span>
            <span className=" font-light  text-[14px] md:text-[16px]">
              High-Quality Products
            </span>
          </div>
          <div className="w-1 bg-gray-300 hidden  md:block "></div>
          <div className=" flex flex-col ">
            <span className="font-bold text-[24px]  md:text-[40px] ">
              30,000+
            </span>
            <span className=" font-light  text-[14px] md:text-[16px]">
              Happy Customers
            </span>
          </div>
          <Image
            className=" block md:hidden"
            src="/images/heromobile.jpg"
            alt="hero section image"
            height="330"
            width="348"
          />
        </div>
      </div>
    </div>
  );
}
