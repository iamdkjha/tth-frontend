import React from 'react';
import Section from '@/components/feature/section';
import Container from '@/components/feature/container';
import ThemeSwitcher from '@/components/theme/themeSwitcher';
import Logo from '@/components/feature/logo';
import Navlinks from './navlinks';
import Menu from './menu';

const LowerNavbar = () => {
    return (
        <Section className='py-2 bg-background shadow dark:shadow-gray-500/50'>
            <Container className='flex items-center justify-center md:justify-between'>
                <Logo />
                <div className='hidden md:flex gap-5 items-center'>
                    <Navlinks />
                    <Menu />
                    {/* <ThemeSwitcher /> */}
                </div>
            </Container>
        </Section>
    )
}

export default LowerNavbar;