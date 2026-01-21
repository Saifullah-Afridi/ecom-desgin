import Image from 'next/image';

export default function BrowseStyleSection() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-14 md:px-8 lg:px-20">
      <div className="rounded-[40px] bg-light-gray px-6 py-12 md:px-16 md:py-16">
        <h2 className="heading-integral mb-14 text-center text-[32px] md:text-[48px]">
          BROWSE BY dress STYLE
        </h2>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {/* Casual - Spans 1 column */}
          <div className="relative h-[200px] overflow-hidden rounded-[20px] bg-white md:col-span-1 md:h-[290px]">
            <Image
              src="/images/categories/casual.png"
              alt="Casual"
              fill
              className="object-cover"
            />
            <div className="absolute left-8 top-6">
              <h3 className="text-satoshi text-[24px] font-bold md:text-[36px]">Casual</h3>
            </div>
          </div>

          {/* Formal - Spans 2 columns */}
          <div className="relative h-[200px] overflow-hidden rounded-[20px] bg-white md:col-span-2 md:h-[290px]">
            <Image
              src="/images/categories/formal.png"
              alt="Formal"
              fill
              className="object-cover"
            />
            <div className="absolute left-8 top-6">
              <h3 className="text-satoshi text-[24px] font-bold md:text-[36px]">Formal</h3>
            </div>
          </div>

          {/* Party - Spans 2 columns */}
          <div className="relative h-[200px] overflow-hidden rounded-[20px] bg-white md:col-span-2 md:h-[290px]">
            <Image
              src="/images/categories/party.png"
              alt="Party"
              fill
              className="object-cover"
            />
            <div className="absolute left-8 top-6">
              <h3 className="text-satoshi text-[24px] font-bold md:text-[36px]">Party</h3>
            </div>
          </div>

          {/* Gym - Spans 1 column */}
          <div className="relative h-[200px] overflow-hidden rounded-[20px] bg-white md:col-span-1 md:h-[290px]">
            <Image
              src="/images/categories/gym.png"
              alt="Gym"
              fill
              className="object-cover"
            />
            <div className="absolute left-8 top-6">
              <h3 className="text-satoshi text-[24px] font-bold md:text-[36px]">Gym</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
