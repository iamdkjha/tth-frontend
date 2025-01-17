'use client';

import React from 'react';
import MenuItems from '../menu-items';
import { MdDarkMode } from "react-icons/md";
import { AiOutlineUser } from "react-icons/ai";
import { IoLogOutOutline } from "react-icons/io5";
import { LuPlus } from "react-icons/lu";
import ThemeSwitcher from '@/components/theme/themeSwitcher';
import Avatar from '@/components/feature/avatar';
import { FaHeart } from 'react-icons/fa6';

interface LargeDeviceMenuProps {}

const LargeDeviceMenu: React.FC<LargeDeviceMenuProps> = ({  }) => {
    return (
        <div className='hidden modal absolute shadow-all-side dark:shadow-gray-800 w-[250px] right-0 rounded-xl top-[45px] md:top-[52px] bg-background py-2 md:flex flex-col'>
            
                <>
                    <div
                        className='border-b flex items-center gap-3 px-3 h-16 hover:bg-custom-phl dark:hover:bg-custom-phd cursor-pointer'
                    >
                        <Avatar src='' className='w-9 h-9' />
                        <h1 className='font-medium'>
                            name
                        </h1>
                    </div>
                    {(
                        <MenuItems
                            href='/create-package'
                            title='Create Package'
                            icon={LuPlus}
                            className='border-b hover:bg-custom-phl dark:hover:bg-custom-phd'
                        />
                    )}
                    <MenuItems
                        href='/liked-packages'
                        title='Liked Packages'
                        icon={FaHeart}
                        className='border-b hover:bg-custom-phl dark:hover:bg-custom-phd'
                    />
                </>
            
                <>
                    <MenuItems
                        href='/signin'
                        title='Account'
                        icon={AiOutlineUser}
                        className='border-b hover:bg-custom-phl dark:hover:bg-custom-phd'
                    />
                </>
            
            <div className='flex justify-between px-3 h-16'>
                <div className=' flex items-center gap-3'>
                    <div className='bg-custom-sbl dark:bg-custom-shd p-2 rounded-full'>
                        <MdDarkMode size={20} />
                    </div>
                    <h1 className='font-medium'>
                        Dark Theme
                    </h1>
                </div>
                <ThemeSwitcher />
            </div>
            
                <>

                    <div
                        className='border-t flex items-center gap-3 px-3 h-16 hover:bg-custom-phl dark:hover:bg-custom-phd cursor-pointer'
                    >
                        <div className='bg-custom-sbl dark:bg-custom-shd p-2 rounded-full'>
                            <IoLogOutOutline size={20} />
                        </div>
                        <h1 className='font-medium'>
                            Logout
                        </h1>
                    </div>
                </>
            
        </div>
    )
}

export default LargeDeviceMenu;