'use client';

import { useState } from 'react';
import ReviewCard from '../review-card';
import ArrowLeftIcon from '../icons/arrow-left.svg';
import ArrowRightIcon from '../icons/arrow-right.svg';

export default function ReviewsSection() {
  const reviews = [
    {
      name: 'Sarah M.',
      rating: 5 as const,
      review:
        "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
    },
    {
      name: 'Alex K.',
      rating: 5 as const,
      review:
        "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.",
    },
    {
      name: 'James L.',
      rating: 5 as const,
      review:
        "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-14 md:px-8 lg:px-20">
      <div className="mb-10 flex items-center justify-between">
        <h2 className="heading-integral text-[32px] md:text-[48px]">OUR HAPPY CUSTOMERS</h2>
        <div className="flex gap-4">
          <button
            onClick={handlePrev}
            className="flex h-10 w-10 items-center justify-center"
            aria-label="Previous review"
          >
            <ArrowLeftIcon className="h-4 w-5" />
          </button>
          <button
            onClick={handleNext}
            className="flex h-10 w-10 items-center justify-center"
            aria-label="Next review"
          >
            <ArrowRightIcon className="h-4 w-5" />
          </button>
        </div>
      </div>

      <div className="overflow-hidden">
        <div
          className="flex gap-5 transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 420}px)` }}
        >
          {reviews.map((review, index) => (
            <ReviewCard key={index} {...review} />
          ))}
        </div>
      </div>
    </div>
  );
}
