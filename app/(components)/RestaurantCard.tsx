import Link from 'next/link';
import { RestaurantCardType } from '../page';
import Price from './Price';
import { CalcReviewsAvg } from '../../utils/CalcReview';
import Stars from './Stars';

interface Props {
  restaurant: RestaurantCardType;
}

export default function RestaurantCard({ restaurant }: Props) {
  let reviewNum;
  if (restaurant.reviews.length === 0) reviewNum = 'No Review';
  if (restaurant.reviews.length === 1) reviewNum = `1 review`;
  if (restaurant.reviews.length > 1)
    reviewNum = `${restaurant.reviews.length} reviews`;

  return (
    <Link href={`/restaurant/${restaurant.slug}`}>
      <div className='w-64 h-72 m-3 rounded overflow-hidden border cursor-pointer'>
        <img
          src={restaurant.main_image}
          alt={restaurant.name}
          className='w-full h-36'
        />
        <div className='p-1'>
          <h3 className='font-bold text-2xl mb-2'>{restaurant.name}</h3>
          <div className='flex items-start'>
            <Stars reviews={restaurant.reviews} />
            <p className='ml-2'>{reviewNum}</p>
          </div>
          <div className='flex text-reg font-light capitalize'>
            <p className=' mr-3'>{restaurant.cuisine.name}</p>
            <p className='mr-3'>
              <Price price={restaurant.price} />
            </p>
            <p>{restaurant.location.name}</p>
          </div>
          <p className='text-sm mt-1 font-bold'>Booked 3 times today</p>
        </div>
      </div>
    </Link>
  );
}
