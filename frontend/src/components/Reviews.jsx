import React from 'react';
import { Star, Quote } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { mockData } from '../data/mock';

const Reviews = () => {
  return (
    <section id="reviews" className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            O Que Nossos Clientes Dizem
          </h2>
          <div className="flex items-center justify-center space-x-2 mb-4">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} className="w-8 h-8 text-yellow-400 fill-yellow-400" />
            ))}
          </div>
          <p className="text-xl text-gray-600">
            {mockData.business.rating} estrelas • {mockData.business.reviewCount} avaliações no Google
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {mockData.reviews.map((review) => (
            <Card 
              key={review.id}
              className="relative hover:shadow-xl transition-all duration-300 border-2 hover:border-blue-500"
            >
              <CardContent className="pt-6">
                {/* Quote Icon */}
                <div className="absolute top-4 right-4 text-blue-200">
                  <Quote className="w-12 h-12" />
                </div>

                {/* Stars */}
                <div className="flex space-x-1 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-gray-700 mb-6 leading-relaxed text-lg">
                  "{review.text}"
                </p>

                {/* Author */}
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-2xl">
                    {review.icon}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{review.author}</p>
                    <p className="text-sm text-gray-500">Cliente VetClin</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Google Reviews Link */}
        <div className="text-center mt-12">
          <a
            href="https://www.google.com/search?q=vetclin+uberlandia"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold text-lg hover:underline"
          >
            Ver todas as avaliações no Google
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
