'use client';

import { TbWorld } from 'react-icons/tb';
import { FiSearch } from 'react-icons/fi';
import { AiOutlineHeart } from 'react-icons/ai';
import { FaAirbnb } from 'react-icons/fa';
import { FaRegMessage } from 'react-icons/fa6';
import { CgProfile } from 'react-icons/cg';
import { Container } from './Container';

const Footer = () => {
	return (
		<div className='fixed w-full bg-white z-10 py-3 border-t shadow-sm bottom-0'>
			<Container>
				<div className='flex justify-between items-center md:hidden'>
					<a href='/' className='flex flex-col items-center'>
						<FiSearch size={28} className='text-gray-400' />
						<small className='text-[10px] text-gray-800'>Explore</small>
					</a>
					<a href='/' className='flex flex-col items-center'>
						<AiOutlineHeart size={28} className='text-gray-400' />
						<small className='text-[10px] text-gray-800'>Wishlist</small>
					</a>
					<a href='/' className='flex flex-col items-center'>
						<FaAirbnb size={28} className='text-gray-400' />
						<small className='text-[10px] text-gray-800'>Trips</small>
					</a>
					<a href='/' className='flex flex-col items-center'>
						<FaRegMessage size={24} className='text-gray-400' />
						<small className='text-[10px] text-gray-800'>Inbox</small>
					</a>
					<a href='/' className='flex flex-col items-center'>
						<CgProfile size={28} className='text-gray-400' />
						<small className='text-[10px] text-gray-800'>Profile</small>
					</a>
				</div>
				<div className='hidden md:flex justify-between items-center'>
					<div className='flex items-center gap-2'>
						<small className='text-sm'>© 2023 Airbnb, Inc.</small>
						<div className='flex-none w-[2px] h-[2px] bg-gray-800 rounded-full'></div>
						<small className=' hover:underline text-sm cursor-pointer'>
							Terms
						</small>
						<div className='flex-none w-[2px] h-[2px] bg-gray-800 rounded-full'></div>
						<small className=' hover:underline text-sm cursor-pointer'>
							Sitemap
						</small>
						<div className='flex-none w-[2px] h-[2px] bg-gray-800 rounded-full'></div>
						<small className=' hover:underline text-sm cursor-pointer'>
							Privacy
						</small>
						<div className='flex-none w-[2px] h-[2px] bg-gray-800 rounded-full'></div>
						<small className=' hover:underline text-sm cursor-pointer'>
							Your Privacy Choice
						</small>
					</div>
					<div className='flex items-center gap-4'>
						<div className='flex items-center gap-1'>
							<TbWorld size={22} className='hidden sm:inline-flex' />
							<small className='font-medium text-sm'>English(US)</small>
						</div>
						<small className='font-medium text-sm'>$ USD</small>
						<small className='font-medium text-sm'>Support & resources</small>
					</div>
				</div>
			</Container>
		</div>
	);
};

export default Footer;
