// components/ReviewsSection.tsx
import React from 'react';

interface Review {
  id: number;
  name: string;
  role: string;
  avatar: string;
  rating: number;
  comment: string;
}

const reviews: Review[] = [
  {
    id: 1,
    name: "Mrs J. Sylvester",
    role: "Client",
    avatar: "https://i.pinimg.com/736x/f5/47/d8/f547d800625af9056d62efe8969aeea0.jpg", // Placeholder clean portrait
    rating: 5,
    comment: "Thank you so much. I’m definitely going to use your services again. I’m very happy with the service I received."
  },
  {
    id: 2,
    name: "Zoleka Stokwe",
    role: "Client",
    avatar: "https://i.pinimg.com/736x/f5/47/d8/f547d800625af9056d62efe8969aeea0.jpg", // Placeholder clean portrait
    rating: 5,
    comment: "🙏 🙏 🙏 🙏"
  },
];

export default function ReviewsSection() {
  return (
    <section className="py-16 bg-gray-50 dark:bg-zinc-900" id="reviews">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            What Our Clients Say
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            Don't just take our word for it — hear from some of our amazing clients.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review) => (
            <div 
              key={review.id} 
              className="flex flex-col justify-between p-6 bg-white dark:bg-zinc-800 rounded-2xl shadow-sm border border-gray-100 dark:border-zinc-700"
            >
              <div>
                {/* Stars */}
                <div className="flex items-center gap-1 mb-4 text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <svg 
                      key={i} 
                      className={`w-5 h-5 ${i < review.rating ? 'fill-current' : 'text-gray-300 dark:text-zinc-600'}`} 
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Comment */}
                <p className="text-gray-600 dark:text-gray-300 italic mb-6">
                  "{review.comment}"
                </p>
              </div>

              {/* User Info */}
              <div className="flex items-center gap-3 pt-4 border-t border-gray-100 dark:border-zinc-700">
                <img 
                  src={review.avatar} 
                  alt={review.name} 
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white text-sm">
                    {review.name}
                  </h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {review.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}