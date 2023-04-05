import { PRICE } from '@prisma/client';
import Link from 'next/link';

export default function Sidebar({
  regions,
  cuisines,
  searchParams,
}: {
  regions: { name: string }[];
  cuisines: { name: string }[];
  searchParams: { city?: string; cuisine?: string; price?: PRICE };
}) {
  const prices = [
    { price: PRICE.CHEAP, label: '$' },
    { price: PRICE.REGULAR, label: '$$' },
    { price: PRICE.EXPENSIVE, label: '$$$' },
  ];

  return (
    <div className='w-1/5'>
      <div className='border-b pb-4 flex flex-col'>
        <h1 className='mb-2'>Region</h1>
        {regions.map((region) => (
          <Link
            href={{
              pathname: '/search',
              query: { ...searchParams, city: region.name },
            }}
            key={region.name}
            className='font-light text-reg capitalize'
          >
            {region.name}
          </Link>
        ))}
      </div>
      <div className='border-b pb-4 mt-3 flex flex-col'>
        <h1 className='mb-2'>Cuisine</h1>
        {cuisines.map((cuisine) => (
          <Link
            href={{
              pathname: '/search',
              query: { ...searchParams, cuisine: cuisine.name },
            }}
            key={cuisine.name}
            className='font-light text-reg capitalize'
          >
            {cuisine.name}
          </Link>
        ))}
      </div>
      <div className='mt-3 pb-4'>
        <h1 className='mb-2'>Price</h1>
        <div className='flex flex-col w-12'>
          {prices.map((price) => (
            <Link
              key={price.label}
              href={{
                pathname: '/search',
                query: { ...searchParams, price: price.price },
              }}
              className='border w-full text-reg text-center font-light rounded-l p-2'
            >
              {price.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
