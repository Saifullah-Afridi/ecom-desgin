import ReviewCard from "./review-card";

export default function ReviewList() {
  return (
    <div className="px-2 md:px-8 lg:px-20 my-[150px]">
      <h1 className="text-2xl mb-8"> All Reviews</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
      </div>
    </div>
  );
}
