'use client';

import React from 'react';
import { BiSearch } from 'react-icons/bi';
import { PiSlidersHorizontalBold } from 'react-icons/pi';

const Search = () => {
	return (
		<div className='border w-full md:w-auto py-2 rounded-full shadow-sm hover:shadow-md transition cursor-pointer'>
			<div className='flex items-center sm:divide-x justify-between'>
				<div className='flex items-center gap-4 px-6'>
					<BiSearch size={18} />
					<div className='flex flex-col'>
						<span className='text-sm font-semibold'>Anywhere</span>
						<div className='sm:hidden flex items-center gap-1'>
							<span className='text-[10px] text-gray-500'>Any Week</span>
							<span className='w-1 h-1 rounded-full bg-gray-500'></span>
							<span className='text-[10px] text-gray-500'>Add guests</span>
						</div>
					</div>
				</div>
				<span className='text-sm font-semibold px-6 hidden sm:block'>
					Any Week
				</span>
				<div className='pl-6 pr-2 flex items-center gap-3'>
					<span className='hidden sm:block text-sm text-gray-600'>
						Add guests
					</span>
					<div className='bg-rose-500 hidden md:inline-flex rounded-full text-white p-2'>
						<BiSearch size={18} />
					</div>
				</div>
				<button className=' mr-3 w-8 sm:hidden h-8 border rounded-[100%] border-gray-300 flex justify-center items-center'>
					<PiSlidersHorizontalBold className='' />
				</button>
			</div>
		</div>
	);
};

export default Search;
