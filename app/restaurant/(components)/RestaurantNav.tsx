import Link from 'next/link';
import React from 'react';

export default function RestaurantNav() {
  return (
    <nav className='flex text-reg border-b pb-2'>
      <Link href='/restaurant/milestone-grill' className='mr-7'>
        Overview
      </Link>
      <Link href='/restaurant/milestone-grill/menu' className='mr-7'>
        Menu
      </Link>
    </nav>
  );
}
