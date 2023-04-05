import { Cuisine, Location, PRICE, PrismaClient, Review } from '@prisma/client';
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
  reviews: Review[];
}

interface SearchParams {
  city?: string;
  cuisine?: string;
  price?: PRICE;
}

const prisma = new PrismaClient();
const fetchResultByParams = async (searchParams: SearchParams) => {
  const { city, cuisine, price } = searchParams;
  if (!city && !cuisine && !price)
    return await prisma.restaurant.findMany({
      select: {
        id: true,
        name: true,
        main_image: true,
        price: true,
        cuisine: true,
        location: true,
        slug: true,
        reviews: true,
      },
    });
  const where: any = {};
  if (city) where.location = { name: { equals: city } };
  if (cuisine) where.cuisine = { name: { equals: cuisine } };
  if (price) where.price = { equals: price };

  return await prisma.restaurant.findMany({
    where,
    select: {
      id: true,
      name: true,
      main_image: true,
      price: true,
      cuisine: true,
      location: true,
      slug: true,
      reviews: true,
    },
  });
};

const getAllRegion = async () => {
  return prisma.location.groupBy({
    by: ['name'],
  });
};

const getAllCuisines = async () => {
  return prisma.cuisine.groupBy({
    by: ['name'],
  });
};

export default async function Search({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const { city, cuisine, price } = searchParams;
  const restaurants = await fetchResultByParams({
    city: city?.toLowerCase(),
    cuisine,
    price,
  });

  const regions = await getAllRegion();
  const cuisines = await getAllCuisines();

  return (
    <>
      <Header />
      <div className='flex py-4 m-auto w-2/3 justify-between items-start'>
        <Sidebar
          regions={regions}
          cuisines={cuisines}
          searchParams={searchParams}
        />
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
