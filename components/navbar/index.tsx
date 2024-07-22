import React from 'react';
import Section from '../feature/section';
import Container from '../feature/container';
import ThemeSwitcher from '../theme/themeSwitcher';
import Logo from '../feature/logo';
import { IoIosMail, IoLogoInstagram } from "react-icons/io";
import { FaPhoneAlt } from 'react-icons/fa';
import Link from 'next/link';
import { TiSocialFacebook, TiSocialLinkedin } from 'react-icons/ti';
import { RiTwitterXFill } from 'react-icons/ri';

const Navbar = () => {
    return (
        <div className='w-full fixed top-0 z-10'>
            <Section className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 py-1 text-white text-sm font-medium hidden md:flex'>
                <Container className='flex justify-between pr-[2px]'>
                    <div className='flex gap-5'>
                        <Link 
                            href=''
                            className='flex items-center gap-1'
                        >
                            <IoIosMail size={18} />
                            <span className='hover:underline'>support@traveltrailholidays.com</span>
                        </Link>
                        <Link 
                            href=''
                            className='flex items-center gap-1'
                        >
                            <FaPhoneAlt size={12} />
                            <span className='hover:underline'>+91 9953276022</span>
                        </Link>
                    </div>
                    <div className='flex items-center gap-2'>
                        <Link
                            href=''
                        >
                            <TiSocialFacebook size={20}/>
                        </Link>
                        <Link
                            href=''
                        >
                            <IoLogoInstagram size={18}/>
                        </Link>
                        <Link
                            href=''
                        >
                            <RiTwitterXFill size={14}/>
                        </Link>
                        <Link
                            href=''
                        >
                            <TiSocialLinkedin size={22}/>
                        </Link>
                    </div>
                </Container>
            </Section>
            <Section className='py-2 bg-background shadow dark:shadow-gray-500/50'>
                <Container className='flex items-center justify-center md:justify-between'>
                    <Logo />
                    <div className='hidden md:block'>
                        <ThemeSwitcher />
                    </div>
                </Container>
            </Section>
        </div>
    )
}

export default Navbar;