import React from 'react';
import emptyStar from '../../public/icons/empty-star.png';
import halfStar from '../../public/icons/half-star.png';
import fullStar from '../../public/icons/full-star.png';
import Image from 'next/image';
import { Review } from '@prisma/client';
import { CalcReviewsAvg } from '../../utils/CalcReview';

export default function Stars({ reviews }: { reviews: Review[] }) {
  const rating = CalcReviewsAvg(reviews);
  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      const difference = parseFloat((rating - i).toFixed(1));
      if (difference > 0.6) {
        stars.push(fullStar);
      } else if (difference > 0.3) {
        stars.push(halfStar);
      } else {
        stars.push(emptyStar);
      }
    }
    return stars;
  };
  const stars = renderStars();
  return (
    <div className=' flex'>
      {stars?.map((star) => (
        <Image className=' mr-1' width={16} alt='star' src={star} />
      ))}
    </div>
  );
}
