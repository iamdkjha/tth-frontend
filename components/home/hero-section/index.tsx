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
                    <Container className=''>
                        <span className='text-4xl text-white font-extrabold'>
                            Travel Beyond Boundaries !
                        </span>
                    </Container>
                </div>
            </Container>
        </Section>
    )
}

export default HomeHeroSection;