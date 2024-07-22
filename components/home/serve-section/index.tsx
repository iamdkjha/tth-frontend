import Container from '@/components/feature/container';
import Section from '@/components/feature/section';
import Image from 'next/image';
import React from 'react';

const HomeServeSection = () => {
    return (
        <Section className='min-h-[1500px] bg-custom-sbl dark:bg-custom-sbd'>
            <Container className='py-20'>
                <div className='flex justify-between items-center'>
                    <div className='flex flex-col gap-10'>
                        <h1 className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text w-fit font-bold text-3xl'>
                            WHAT WE SERVE
                        </h1>
                        <div className='ml-20 w-fit text-end text-7xl leading-snug'>
                            <h1>
                                TOP VALUES
                            </h1>
                            <h1>
                                FOR YOU!
                            </h1>
                        </div>
                    </div>
                    <div>
                        
                    </div>
                </div>
                <div></div>
            </Container>
        </Section>
    )
}

export default HomeServeSection;