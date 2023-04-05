import React from 'react';
import ResSkeleton from './(components)/ResSkeleton';
import Header from '../(components)/Header';

export default function Loading() {
  return (
    <div className=' mx-auto w-4/5'>
      <Header />
      <div className=' mx-auto'>
        <ResSkeleton />
      </div>
    </div>
  );
}
