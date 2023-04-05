import { Review } from '@prisma/client';
import React from 'react';
import ReviewCard from './ReviewCard';

export default function Reviews({ reviews }: { reviews: Review[] }) {
  const intro =
    reviews.length === 0
      ? 'No review for now'
      : reviews.length === 1
      ? 'What 1 person is saying'
      : `What ${reviews.length} people are saying`;
  return (
    <div>
      <h1 className='font-bold text-3xl mt-10 mb-7 borber-b pb-5'>{intro}</h1>
      <div>
        {reviews.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>
    </div>
  );
}
