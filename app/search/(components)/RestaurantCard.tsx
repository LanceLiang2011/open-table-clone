import Link from 'next/link';
import { RestaurantType } from '../page';
import Price from '../../(components)/Price';
import { CalcReviewsAvg } from '../../../utils/CalcReview';
import Stars from '../../(components)/Stars';

export default function RestaurantCard({
  restaurant,
}: {
  restaurant: RestaurantType;
}) {
  const avgReview = CalcReviewsAvg(restaurant.reviews);
  const ranking =
    avgReview === 0
      ? 'No Review'
      : avgReview > 4
      ? 'Awesome'
      : avgReview > 3
      ? 'Good'
      : 'Average';
  return (
    <div className='border-b flex pb-5 ml-36'>
      <img src={restaurant.main_image} alt='' className='w-44 h-36 rounded' />
      <div className='pl-5'>
        <h2 className='text-3xl'>{restaurant.name}</h2>
        <div className='flex items-start'>
          <Stars reviews={restaurant.reviews} />
          <p className='ml-2 text-sm'>{ranking}</p>
        </div>
        <div className='mb-9'>
          <div className='font-light flex text-reg'>
            <p className='mr-4'>
              <Price price={restaurant.price} />
            </p>
            <p className='mr-4'>{restaurant.cuisine.name}</p>
            <p className='mr-4 capitalize'>{restaurant.location.name}</p>
          </div>
        </div>
        <div className='text-red-600'>
          <Link href={`/restaurant/${restaurant.slug}`}>
            View more information
          </Link>
        </div>
      </div>
    </div>
  );
}
