import { Review } from '@prisma/client';
import React from 'react';
import { CalcReviewsAvg } from '../../../../utils/CalcReview';
import Stars from '../../../(components)/Stars';

export default function Rating({ reviews }: { reviews: Review[] }) {
  return (
    <div className='flex items-end'>
      <div className='ratings mt-2 flex items-center'>
        <Stars reviews={reviews} />
        <p className='text-reg ml-3'>
          {reviews.length === 0
            ? 'No Review'
            : CalcReviewsAvg(reviews).toFixed(1)}
        </p>
      </div>
      <div>
        <p className='text-reg ml-4'>{reviews.length} Reviews</p>
      </div>
    </div>
  );
}
