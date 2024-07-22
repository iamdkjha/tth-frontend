import Home from '@/components/home';
import Navbar from '@/components/navbar';
import React from 'react';

const page = () => {
  return (
    <main className='flex min-h-screen flex-col items-center justify-start min-w-screen overflow-x-hidden bg-background'>
      <Navbar />
      <Home />
    </main>
  )
}

export default page;