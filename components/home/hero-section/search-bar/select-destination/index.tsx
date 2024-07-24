import React from 'react';
import { IoLocationSharp } from 'react-icons/io5';

const SelectDestination = () => {
    return (
        <div className='w-full relative rounded-xl'>
            <input
                type="text"
                placeholder='Select destination'
                className='bg-white w-full pr-5 pl-10 py-5 border-r rounded-l-xl hover:rounded-l-xl focus:outline-none'
            />
            <IoLocationSharp size={20} className='absolute top-1/2 -translate-y-1/2 left-3 ' />
        </div>
    )
}

export default SelectDestination;