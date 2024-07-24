import Container from '@/components/feature/container';
import Section from '@/components/feature/section';
import Image from 'next/image';
import React from 'react';
import Search from '@/components/home/hero-section/search-bar/index';

const HomeHeroSection = () => {
    return (
        <Section className='bg-background mt-32 mb-20 md:mt-0 md:mb-0 md:h-[800px] relative'>
            <Container className=''>
                <Image
                    fill
                    src='/homeHeroImage.jpg'
                    alt='heroImage'
                    className='object-cover hidden md:block'
                    quality={100}
                />
                <div className='absolute left-0 top-0 bg-black bg-opacity-30 backdrop-filter backdrop-blur-sm w-full h-full flex items-center justify-center'>
                    <Container className='flex justify-center '>
                        <div className='md:flex flex-col text-center items-center justify-center text-gray-800b dark:text-gray-100 md:text-gray-100 gap-2 relative'>
                            <span className='hero-title font-extrabold uppercase'>
                                Travel Beyond Boundaries !
                            </span>
                            <p className='hero-subtitle hidden md:block w-[600px] lg:w-[800px] xl:w-auto max-w-[1000px]'>
                                Whether you&apos;re looking for a romantic getaway, a family-friendly adventure, or a solo journey to explore the world, we travel trail holidays can provide you with a custom-tailored itinerary that exceeds your expectations.
                            </p>
                            <Search className='hidden md:flex md:absolute md:mt-10 -bottom-40'/>
                        </div>
                    </Container>
                </div>
            </Container>
        </Section>
    )
}

export default HomeHeroSection;