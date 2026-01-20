import { CheckCircle, MoreVertical, Star } from "lucide-react";

export default function ReviewCard() {
  return (
    <div className="bg-gray-50">
      <div className="mx-auto">
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
          {/* Header with stars and menu */}
          <div className="flex items-start justify-between mb-4">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={24}
                  className={
                    i < 4
                      ? "fill-yellow-400 text-yellow-400"
                      : "fill-yellow-300 text-yellow-300"
                  }
                />
              ))}
            </div>
            <button className="text-gray-400 hover:text-gray-600 p-1">
              <MoreVertical size={20} />
            </button>
          </div>

          {/* Reviewer name with verification */}
          <div className="flex items-center gap-2 mb-2">
            <h3 className="text-xl font-semibold text-gray-900">Samantha D.</h3>
            <CheckCircle size={20} className="text-green-500 fill-green-500" />
          </div>

          {/* Review text */}
          <p className="text-gray-600 text-base leading-relaxed mb-3">
            "I absolutely love this t-shirt! The design is unique and the fabric
            feels so comfortable. As a fellow designer, I appreciate the
            attention to detail. It's become my favorite go-to shirt."
          </p>

          {/* Date posted */}
          <p className="text-gray-500 text-sm">Posted on August 14, 2023</p>
        </div>
      </div>
    </div>
  );
}
