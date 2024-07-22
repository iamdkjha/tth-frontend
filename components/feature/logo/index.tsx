import Link from 'next/link';
import React from 'react';

const Logo = () => {
  return (
    <Link 
      href='/'
      className='font-bold text-2xl'
    >
      Travel Trail Holidays
    </Link>
  )
}

export default Logo;