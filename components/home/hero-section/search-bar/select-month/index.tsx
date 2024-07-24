import React from 'react';
import { MdCalendarMonth } from 'react-icons/md';

const SelectMonth = () => {
  return (
    <div className='w-full relative'>
      <select
        className='bg-white w-full pr-5 pl-10 py-5 border-r rounded-l-xl hover:rounded-l-xl focus:outline-none appearance-none'
      >
        <option value="" hidden disabled>Select duration</option>
        <option value="1 to 3 days">1 to 3 days</option>
        <option value="4 to 6 days">4 to 6 days</option>
        <option value="7 to 9 days">7 to 9 days</option>
        <option value="10 to 12 days">10 to 12 days</option>
        <option value="13 days or more">13 days or more</option>
      </select>
      <MdCalendarMonth size={20} className='absolute top-1/2 -translate-y-1/2 left-3' />
    </div>
  )
}

export default SelectMonth;