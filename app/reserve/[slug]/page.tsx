import Link from 'next/link';
import React from 'react';
import Navebar from '../../(components)/Navebar';
import Form from './(components)/Form';
import Header from './(components)/Header';

export default function ReservationPage() {
  return (
    <main className='bg-gray-100 min-h-screen w-screen'>
      <main className='max-w-screen-2xl m-auto bg-white'>
        <Navebar />
        <div className='border-t h-screen'>
          <div className='py-9 w-3/5 m-auto'>
            <Header />
            {/* FORM */}
            <Form />
          </div>
        </div>
      </main>
    </main>
  );
}
