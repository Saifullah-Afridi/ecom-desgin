import { Button } from '../ui/button';
import ProductCard from '../product-card';

export default function NewArrivalsSection() {
  const products = [
    {
      image: '/images/products/tshirt-tape.png',
      title: 'T-shirt with Tape Details',
      rating: 4.5,
      ratingText: '4.5/5',
      price: 120,
    },
    {
      image: '/images/products/jeans-skinny.png',
      title: 'Skinny Fit Jeans',
      rating: 3.5,
      ratingText: '3.5/5',
      price: 240,
      originalPrice: 260,
      discount: 20,
    },
    {
      image: '/images/products/shirt-checkered.png',
      title: 'Checkered Shirt',
      rating: 4.5,
      ratingText: '4.5/5',
      price: 180,
    },
    {
      image: '/images/products/tshirt-sleeve-striped.png',
      title: 'Sleeve Striped T-shirt',
      rating: 4.5,
      ratingText: '4.5/5',
      price: 130,
      originalPrice: 160,
      discount: 30,
    },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 py-14 md:px-8 lg:px-20">
      <h2 className="heading-integral mb-14 text-center text-[32px] md:text-[48px]">
        NEW ARRIVALS
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
