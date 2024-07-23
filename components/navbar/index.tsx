import React from 'react';
import UpperNavbar from '@/components/navbar/upper-navbar';
import LowerNavbar from '@/components/navbar/lower-navbar';

const Navbar = () => {
    return (
        <div className='w-full fixed top-0 z-40'>
            <UpperNavbar />
            <LowerNavbar />
        </div>
    )
}

export default Navbar;