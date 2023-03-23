import Link from 'next/link';
import React from 'react';
import Navebar from '../(components)/Navebar';
import Header from './(components)/Header';
import RestaurantCard from './(components)/RestaurantCard';
import Sidebar from './(components)/Sidebar';

export default function Search() {
  return (
    <main className='bg-gray-100 min-h-screen w-screen'>
      <main className='max-w-screen-2xl m-auto bg-white'>
        <Navebar />
        <Header />
        <div className='flex py-4 m-auto w-2/3 justify-between items-start'>
          <Sidebar />
          <div className='w-5/6'>
            <RestaurantCard />
          </div>
        </div>
      </main>
    </main>
  );
}
