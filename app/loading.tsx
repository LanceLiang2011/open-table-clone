import React from 'react';
import Header from './(components)/Header';
import Skeleten from './(components)/Skeleten';

export default function Loading() {
  return (
    <main>
      <Header />
      <div className='py-3 px-36 mt-10 flex flex-wrap justify-center gap-4'>
        {Array.from(Array(12).keys()).map((num) => (
          <Skeleten />
        ))}
      </div>
    </main>
  );
}
