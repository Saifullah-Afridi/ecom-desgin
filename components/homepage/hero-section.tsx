import Image from 'next/image';
import { Button } from '../ui/button';
import StarLargeIcon from '../icons/star-large.svg';
import StarSmallIcon from '../icons/star-small.svg';
import { Separator } from '../ui/separator';

export default function HeroSectionNew() {
  return (
    <div className="relative bg-light-gray">
      <div className="relative min-h-[600px] md:min-h-[655px]">
        {/* Background Image */}
        <div className="absolute inset-0 hidden md:block">
          <Image
            src="/images/hero-bg.jpg"
            alt="Fashion models"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Content */}
        <div className="relative mx-auto max-w-7xl px-4 py-[40px] md:px-8 md:py-[100px] lg:px-20">
          <div className="flex max-w-[580px] flex-col gap-8">
            {/* Decorative stars - desktop only */}
            <div className="absolute right-8 top-40 hidden md:block">
              <StarLargeIcon className="h-14 w-14" />
            </div>
            <div className="absolute right-1/3 top-52 hidden md:block">
              <StarSmallIcon className="h-14 w-14" />
            </div>

            {/* Heading */}
            <h1 className="heading-abeezee text-[36px] leading-[36px] md:text-[64px] md:leading-[64px]">
              FIND CLOTHES THAT MATCHES YOUR STYLE
            </h1>

            {/* Description */}
            <p className="text-satoshi text-[14px] leading-[22px] text-gray-60 md:text-[16px]">
              Browse through our diverse range of meticulously crafted garments, designed to
              bring out your individuality and cater to your sense of style.
            </p>

            {/* CTA Button */}
            <Button className="h-[52px] w-full rounded-full bg-black px-[67px] text-[16px] font-medium text-white hover:bg-black/90 md:w-auto">
              Shop Now
            </Button>

            {/* Stats */}
            <div className="flex flex-wrap justify-center gap-8 pt-8 md:justify-start md:pt-0">
              <div className="flex flex-col">
                <span className="text-satoshi text-[24px] font-bold md:text-[40px]">200+</span>
                <span className="text-satoshi text-[14px] text-gray-60 md:text-[16px]">
                  International Brands
                </span>
              </div>

              <Separator orientation="vertical" className="h-[75px] bg-black/10" />

              <div className="flex flex-col">
                <span className="text-satoshi text-[24px] font-bold md:text-[40px]">
                  2,000+
                </span>
                <span className="text-satoshi text-[14px] text-gray-60 md:text-[16px]">
                  High-Quality Products
                </span>
              </div>

              <Separator orientation="vertical" className="hidden h-[75px] bg-black/10 md:block" />

              <div className="flex flex-col">
                <span className="text-satoshi text-[24px] font-bold md:text-[40px]">
                  30,000+
                </span>
                <span className="text-satoshi text-[14px] text-gray-60 md:text-[16px]">
                  Happy Customers
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
