import Image from "next/image";

export default function HeroSection() {
  return (
    <div className="relative min-h-screen bg-[#F2F0F1] md:bg-[url('/images/HeroSection.png')] md:bg-center md:bg-cover md:bg-no-repeat">
      {/* Overlay - only on desktop */}
      <div className="hidden md:block absolute inset-0 bg-black/50 w-full h-screen z-10"></div>

      {/* Content */}
      <div className="relative z-20 container flex flex-col justify-center min-h-screen px-4 md:px-20 gap-4 md:gap-8 py-[85px]">
        <h1 className="text-[36px] md:text-[64px] font-bold md:font-normal leading-9 md:leading-[72px] uppercase">
          FIND CLOTHES
          <br /> THAT MATCHES <br /> YOUR STYLE
        </h1>

        <p className="text-[14px] md:text-[16px] leading-[22px] md:leading-6">
          Browse through our diverse range of meticulously crafted garments,
          designed to <br /> bring out your individuality and cater to your
          sense of style.
        </p>

        <button className="bg-black text-white font-medium text-[16px] px-[67px] py-[15px] rounded-full w-full md:w-auto">
          Shop Now
        </button>

        {/* Stats */}
        <div className="flex flex-wrap md:flex-nowrap items-center gap-8 mt-6">
          <div className="flex flex-col items-center md:items-start">
            <span className="font-bold text-[24px] md:text-[40px]">200+</span>
            <span className="font-light text-[14px] md:text-[16px]">
              International Brands
            </span>
          </div>

          <div className="hidden md:block w-px h-12 bg-gray-300"></div>

          <div className="flex flex-col items-center md:items-start">
            <span className="font-bold text-[24px] md:text-[40px]">2,000+</span>
            <span className="font-light text-[14px] md:text-[16px]">
              High-Quality Products
            </span>
          </div>

          <div className="hidden md:block w-px h-12 bg-gray-300"></div>

          <div className="flex flex-col items-center md:items-start">
            <span className="font-bold text-[24px] md:text-[40px]">
              30,000+
            </span>
            <span className="font-light text-[14px] md:text-[16px]">
              Happy Customers
            </span>
          </div>

          {/* Mobile Image */}
          <div className="block md:hidden mt-4 w-full flex justify-center">
            <Image
              src="/images/heromobile.jpg"
              alt="Hero Section Mobile"
              width={348}
              height={330}
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
