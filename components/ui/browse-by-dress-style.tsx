import Image from "next/image";

export default function BrowseByDressStyle() {
  return (
    <div className=" bg-[#F0F0F0] px-4 md:px-8 lg:px-16 rounded-2xl">
      <div className=" py-7 rounded-xl px-6">
        <h2
          className="text-center uppercase font-bold text-3xl lg:text-5xl
         leading-9 ld:leading-0  mt-10  lg:mt-[70px]  mb-7 lg:mb-[64px] "
        >
          BROWSE BY <br className="lg:hidden" /> dress STYLE
        </h2>
        <div className="flex lg:flex-row  flex-col  gap-x-4 gap-y-6  mt-6">
          <div className="relative w-full lg:w-1/3 h-[200px]">
            <Image
              src="/images/bro-1.jpg"
              fill
              sizes="100%"
              quality={100}
              alt="browse section image"
              className="rounded-xl"
            />
            <span className="absolute top-10 left-6 font-bold text-2xl  lg:text-4xl ">
              {" "}
              Casual{" "}
            </span>
          </div>
          <div className="relative w-full lg:w-2/3  h-[200px]">
            <Image
              src="/images/bro-1.jpg"
              fill
              alt="browse section image"
              className="  rounded-xl"
              sizes="100%"
              quality={100}
            />
            <span className="absolute top-10 left-6 font-bold text-2xl  lg:text-4xl ">
              {" "}
              Casual{" "}
            </span>
          </div>
        </div>
        <div className="flex lg:flex-row  flex-col  gap-x-4 gap-y-6  mt-6">
          <div className="relative w-full lg:w-2/3  h-[200px]">
            <Image
              src="/images/bro-1.jpg"
              fill
              alt="browse section image"
              className="  rounded-xl"
              sizes="100%"
              quality={100}
            />
            <span className="absolute top-10 left-6 font-bold text-2xl  lg:text-4xl ">
              {" "}
              Casual{" "}
            </span>
          </div>
          <div className="relative w-full lg:w-1/3 h-[200px]">
            <Image
              src="/images/bro-1.jpg"
              fill
              sizes="100%"
              quality={100}
              alt="browse section image"
              className="rounded-xl"
            />
            <span className="absolute top-10 left-6 font-bold text-2xl  lg:text-4xl ">
              {" "}
              Casual{" "}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
