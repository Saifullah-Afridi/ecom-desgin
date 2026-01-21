import Image from 'next/image';

export default function BrandsSection() {
  const brands = [
    { name: 'Versace', logo: '/images/brands/versace.svg' },
    { name: 'Zara', logo: '/images/brands/zara.svg' },
    { name: 'Gucci', logo: '/images/brands/gucci.svg' },
    { name: 'Prada', logo: '/images/brands/prada.svg' },
    { name: 'Calvin Klein', logo: '/images/brands/calvin-klein.svg' },
  ];

  return (
    <div className="bg-black py-10">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-8 px-4 md:px-8 lg:gap-16 lg:px-20">
        {brands.map((brand) => (
          <div key={brand.name} className="relative h-8 w-[120px] md:h-10 md:w-[166px]">
            <Image
              src={brand.logo}
              alt={brand.name}
              fill
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
