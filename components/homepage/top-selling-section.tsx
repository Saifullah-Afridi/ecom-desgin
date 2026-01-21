import { Button } from '../ui/button';
import ProductCard from '../product-card';

export default function TopSellingSection() {
  const products = [
    {
      image: '/images/products/shirt-vertical-striped.png',
      title: 'Vertical Striped Shirt',
      rating: 5.0,
      ratingText: '5.0/5',
      price: 212,
      originalPrice: 232,
      discount: 20,
    },
    {
      image: '/images/products/tshirt-courage.png',
      title: 'Courage Graphic T-shirt',
      rating: 4.0,
      ratingText: '4.0/5',
      price: 145,
    },
    {
      image: '/images/products/shorts-bermuda.png',
      title: 'Loose Fit Bermuda Shorts',
      rating: 3.0,
      ratingText: '3.0/5',
      price: 80,
    },
    {
      image: '/images/products/jeans-faded.png',
      title: 'Faded Skinny Jeans',
      rating: 4.5,
      ratingText: '4.5/5',
      price: 210,
    },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 py-14 md:px-8 lg:px-20">
      <h2 className="heading-integral mb-14 text-center text-[32px] md:text-[48px]">
        TOP SELLING
      </h2>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>

      <div className="mt-8 flex justify-center">
        <Button
          variant="outline"
          className="h-[52px] rounded-full border border-black/10 px-[54px] text-[16px] font-medium hover:bg-black hover:text-white"
        >
          View All
        </Button>
      </div>
    </div>
  );
}
