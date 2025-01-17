import React from 'react';
import SelectDestination from './select-destination';
import SelectDuration from './select-duration';
import SelectMonth from './select-month';

interface SearchProps {
  className?: string;
}

const Search: React.FC<SearchProps> = ({ className }) => {
  return (
    <div className={`${className} text-start w-full md:w-[90%] rounded-2xl backdrop-filter backdrop-blur-md bg-opacity-30 bg-gray-500 p-4 flex `}>
      <SelectDestination />
      <SelectDuration />
      <SelectMonth />
      <div 
        className='py-5 px-10 cursor-pointer bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-xl font-medium'
      >
        Search
      </div>
    </div>
  )
}

export default Search;