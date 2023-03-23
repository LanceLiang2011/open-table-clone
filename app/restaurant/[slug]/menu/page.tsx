import RestaurantNav from '../../(components)/RestaurantNav';
import Menu from './(components)/Menu';

export default function RestaurantMenu() {
  return (
    <div className='bg-white w-[100%] rounded p-3 shadow'>
      <RestaurantNav />
      <Menu />
    </div>
  );
}
