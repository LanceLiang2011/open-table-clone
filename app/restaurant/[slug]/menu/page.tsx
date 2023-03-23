import Link from 'next/link';
import React from 'react';
import Navebar from '../../../(components)/Navebar';
import Header from '../../(components)/Header';
import RestaurantNav from '../../(components)/RestaurantNav';
import Menu from './Menu';

export default function RestaurantMenu() {
  return (
    <main className='bg-gray-100 min-h-screen w-screen'>
      <main className='max-w-screen-2xl m-auto bg-white'>
        <Navebar />
        <Header />
        {/* DESCRIPTION PORTION */}
        <div className='flex m-auto w-2/3 justify-between items-start 0 -mt-11'>
          <div className='bg-white w-[100%] rounded p-3 shadow'>
            <RestaurantNav />
            <Menu />
          </div>
        </div>
        {/* DESCRIPTION PORTION */}
      </main>
    </main>
  );
}
