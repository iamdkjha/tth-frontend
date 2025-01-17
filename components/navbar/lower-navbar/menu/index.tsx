'use client';

import Avatar from '@/components/feature/avatar';
import React, { useCallback, useEffect, useState } from 'react';
import { HiMenuAlt3 } from "react-icons/hi";
import LargeDeviceMenu from './large-device';
// import LargeDeviceMenu from './large-device';
// import SmallDeviceMenu from './small-device';

interface MenuProps {}

const Menu: React.FC<MenuProps> = ({  }) => {

    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = useCallback(() => {
        setIsOpen((value) => !value);
    }, [setIsOpen]);
    const handleClose = useCallback(() => {
        setIsOpen(false);
    }, [setIsOpen]);
    useEffect(() => {
        const handleEscape = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                setIsOpen(false);
            }
        };

        const handleClickOutside = (event: MouseEvent) => {
            if (
                isOpen &&
                !(event.target instanceof HTMLElement && event.target.closest(".modal"))
            ) {
                setIsOpen(false);
            }
        };

        const handleBodyOverflow = () => {
            if (isOpen && !window.matchMedia("(min-width: 1024px)").matches) {
                document.body.style.overflow = "hidden";
            } else {
                document.body.style.overflow = "";
            }
        };

        document.addEventListener("keydown", handleEscape);
        document.addEventListener("click", handleClickOutside);
        handleBodyOverflow();

        return () => {
            document.removeEventListener("keydown", handleEscape);
            document.removeEventListener("click", handleClickOutside);
            document.body.style.overflow = "";
        };
    }, [isOpen]);

    return (
        <div className='md:relative'>
            <div
                onClick={toggleMenu}
                className='shadow-all-side shadow-gray-200 dark:shadow-gray-700 p-2 flex items-center justify-between gap-2 cursor-pointer rounded-3xl'
            >
                <HiMenuAlt3 size={20} />
                <Avatar src={''} className='hidden md:flex select-none'/>
            </div>
            {isOpen && (
                <>
                    <LargeDeviceMenu/>
                    {/* <SmallDeviceMenu currentUser={currentUser} onClick={handleClose}/> */}
                </>
            )}
        </div>
    )
}

export default Menu;