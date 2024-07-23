import Container from '@/components/feature/container';
import Section from '@/components/feature/section';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const HomeHeroSection = () => {
    return (
        <Section className='min-h-screen'>
            <Container className='flex flex-col justify-between'>
                <div className='h-[48px] md:h-[78px]'></div>
                <div className='flex flex-col-reverse md:flex-row md:items-center justify-center md:justify-between gap-10'>
                    <div className=''>
                        <h1 className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text w-fit font-bold text-xl'>
                            Discover New Horizons!
                        </h1>
                        <div className='hero-title md:text-7xl lg:text-7xl xl:text-[105px] 2xl:text-9xl flex flex-col leading-snug md:leading-snug lg:leading-snug xl:leading-snug 2xl:leading-snug font-extrabold transition text-gray-800 dark:text-gray-100'>
                            <span>
                                Travel
                            </span>
                            <span>
                                Beyound
                            </span>
                            <span>
                                Boundaries
                            </span>
                        </div>
                    </div>
                    <div className='justify-center gap-7 md:flex items-center hidden'>
                        <Image
                            width={10000}
                            height={10000}
                            src='/home-banner-image.png'
                            alt=''
                            quality={100}
                            className='min-w-[300px] w-[90%] max-w-[700px]'
                        />
                    </div>
                </div>
                <div></div>
            </Container>
        </Section>
    )
}

export default HomeHeroSection;