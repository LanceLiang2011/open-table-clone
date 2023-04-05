import { Review } from '@prisma/client';

export const CalcReviewsAvg = (reviews: Review[]): number => {
  if (reviews.length === 0 || !reviews) return 0;
  return reviews.reduce((acc, cur) => acc + cur.rating, 0) / reviews.length;
};
