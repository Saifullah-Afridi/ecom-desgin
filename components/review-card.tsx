import Stars5Icon from './icons/stars-5.svg';
import Stars4Icon from './icons/stars-4.svg';
import VerifiedIcon from './icons/verified.svg';

interface ReviewCardProps {
  name: string;
  rating: 4 | 5;
  review: string;
  verified?: boolean;
}

export default function ReviewCard({ name, rating, review, verified = true }: ReviewCardProps) {
  const StarsIcon = rating === 5 ? Stars5Icon : Stars4Icon;

  return (
    <div className="flex min-w-[400px] flex-col gap-[15px] rounded-[20px] border border-black/10 p-6">
      <StarsIcon className="h-[23px] w-[139px]" />
      <div className="flex items-center gap-1">
        <span className="text-satoshi text-[20px] font-bold leading-[22px] text-black">
          {name}
        </span>
        {verified && <VerifiedIcon className="h-5 w-5" />}
      </div>
      <p className="text-satoshi text-[16px] leading-[22px] text-gray-60">
        {review}
      </p>
    </div>
  );
}
