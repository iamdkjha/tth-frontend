import React from 'react';
import { IoIosMail, IoLogoInstagram } from "react-icons/io";
import { FaPhoneAlt } from 'react-icons/fa';
import Link from 'next/link';
import { TiSocialFacebook, TiSocialLinkedin } from 'react-icons/ti';
import { RiTwitterXFill } from 'react-icons/ri';
import Section from '@/components/feature/section';
import Container from '@/components/feature/container';

const UpperNavbar = () => {
    return (
        <Section className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 py-1 text-white text-sm font-medium hidden md:flex'>
            <Container className='flex justify-between pr-[2px]'>
                <div className='flex gap-10'>
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
                        <TiSocialFacebook size={20} />
                    </Link>
                    <Link
                        href=''
                    >
                        <IoLogoInstagram size={18} />
                    </Link>
                    <Link
                        href=''
                    >
                        <RiTwitterXFill size={14} />
                    </Link>
                    <Link
                        href=''
                    >
                        <TiSocialLinkedin size={22} />
                    </Link>
                </div>
            </Container>
        </Section>
    )
}

export default UpperNavbar;