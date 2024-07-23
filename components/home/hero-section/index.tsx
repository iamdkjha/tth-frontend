import Container from '@/components/feature/container';
import Section from '@/components/feature/section';
import Image from 'next/image';
import React from 'react';

const HomeHeroSection = () => {
    return (
        <Section className='h-[800px] relative'>
            <Container className=''>
                <Image
                    fill
                    src='/homeHeroImage.jpg'
                    alt='heroImage'
                    className='object-cover'
                    quality={100}
                />
                <div className='absolute left-0 top-0 bg-black bg-opacity-30 backdrop-filter backdrop-blur-md w-full h-full flex items-center justify-center'>
                    <Container className='flex justify-center '>
                        <div className='flex flex-col text-center items-center text-gray-100'>
                            <span className='hero-title font-extrabold uppercase'>
                                Travel Beyond Boundaries !
                            </span>
                            <p className='max-w-[1000px]'>
                                Whether you&apos;re looking for a romantic getaway, a family-friendly adventure, or a solo journey to explore the world, we travel trail holidays can provide you with a custom-tailored itinerary that exceeds your expectations.
                            </p>
                        </div>  
                    </Container>
                </div>
            </Container>
        </Section>
    )
}

export default HomeHeroSection;