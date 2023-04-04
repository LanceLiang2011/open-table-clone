import { PrismaClient } from '@prisma/client';
import RestaurantNav from '../../(components)/RestaurantNav';
import Menu from './(components)/Menu';

const prisma = new PrismaClient();
const fetchItems = async (slug: string) => {
  const restaurant = await prisma.restaurant.findUnique({
    where: { slug },
    select: { items: true },
  });

  if (!restaurant) throw new Error();
  return restaurant.items;
};

export default async function RestaurantMenu({
  params,
}: {
  params: { slug: string };
}) {
  const items = await fetchItems(params.slug);
  console.log({ items });
  return (
    <div className='bg-white w-[100%] rounded p-3 shadow'>
      <RestaurantNav slug={params.slug} />
      <Menu items={items} />
    </div>
  );
}
