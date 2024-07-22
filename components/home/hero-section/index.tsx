import Container from '@/components/feature/container';
import Section from '@/components/feature/section';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const HomeHeroSection = () => {
    return (
        <Section className='min-h-screen'>
            <Container className='flex flex-col-reverse md:flex-row justify-center items-center gap-10'>
                <div className='w-full md:w-auto flex flex-col gap-3'>
                    <h1 className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text w-fit font-bold text-xl'>
                        Discover New Horizons!
                    </h1>
                    <h1 className='text-6xl'>
                        Travel Beyond Boundaries
                    </h1>
                </div>
                <Image
                    width={10000}
                    height={10000}
                    src='/home-banner-image.png'
                    alt=''
                    quality={100}
                    className='select-none max-h-[500px] md:max-w-[500px] min-h-[200px] md:min-w-[200px] w-[90%] object-cover'
                />
                <div>
                    <Image 
                        width={100}
                        height={100}
                        src='/vector2.png'
                        alt='test'
                        className='rotate-12'
                    />
                </div>
            </Container>
        </Section>
    )
}

export default HomeHeroSection;