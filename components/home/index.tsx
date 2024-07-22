import React from 'react';
import HomeHeroSection from './hero-section';
import HomeServeSection from './serve-section';

const Home = () => {
  return (
    <div className='w-full'>
      <HomeHeroSection />
      <HomeServeSection />
    </div>
  )
}

export default Home;