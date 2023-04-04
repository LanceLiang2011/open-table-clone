import { Cuisine, Location, PRICE, PrismaClient } from '@prisma/client';
import Header from './(components)/Header';
import RestaurantCard from './(components)/RestaurantCard';
import Sidebar from './(components)/Sidebar';

export interface RestaurantType {
  location: Location;
  cuisine: Cuisine;
  slug: string;
  id: number;
  name: string;
  main_image: string;
  price: PRICE;
}

const prisma = new PrismaClient();
const fetchResultByCity = async (city: string | undefined) => {
  if (!city)
    return await prisma.restaurant.findMany({
      select: {
        id: true,
        name: true,
        main_image: true,
        price: true,
        cuisine: true,
        location: true,
        slug: true,
      },
    });

  return await prisma.restaurant.findMany({
    where: { location: { name: { equals: city } } },
    select: {
      id: true,
      name: true,
      main_image: true,
      price: true,
      cuisine: true,
      location: true,
      slug: true,
    },
  });
};

export default async function Search({
  searchParams,
}: {
  searchParams: { city: string };
}) {
  const restaurants = await fetchResultByCity(searchParams.city.toLowerCase());

  console.log(restaurants);

  return (
    <>
      <Header />
      <div className='flex py-4 m-auto w-2/3 justify-between items-start'>
        <Sidebar />
        <div className='w-5/6'>
          {restaurants.length >= 1
            ? restaurants.map((restaurant) => (
                <RestaurantCard key={restaurant.id} restaurant={restaurant} />
              ))
            : 'Sorry, No restaurant found in this area'}
        </div>
      </div>
    </>
  );
}
