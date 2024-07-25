'use client';

import GradientIcon from '@/components/feature/gradient-icon';
import React, { useState } from 'react';
import { MdCalendarMonth } from 'react-icons/md';

const SelectMonth = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const options = [
    "1 to 3 days",
    "4 to 6 days",
    "7 to 9 days",
    "10 to 12 days",
    "13 days or more"
  ];

  return (
    <div
      className='w-full min-w-[205px] relative cursor-pointer'
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="relative">
        <div
          className="bg-transparent w-full pr-5 pl-10 py-5 rounded-l-xl hover:rounded-l-xl focus:outline-none appearance-none cursor-pointer"
        >
          {selectedOption || "Select month"}
        </div>
        {isOpen && (
          <div className="absolute w-full mt-1 backdrop-blur-md bg-opacity-100 dark:bg-opacity-90 bg-white text-black dark:text-white dark:bg-slate-500 rounded-xl shadow-lg z-10">
            {options.map((option, index) => (
              <div
                key={index}
                className="px-4 py-2 hover:bg-transparent/10"
                onClick={() => {
                  setSelectedOption(option);
                  setIsOpen(false);
                }}
              >
                {option}
              </div>
            ))}
          </div>
        )}
      </div>
      <GradientIcon icon={MdCalendarMonth} size={24} className='absolute top-5 left-3 ' />
    </div>
  )
}

export default SelectMonth;