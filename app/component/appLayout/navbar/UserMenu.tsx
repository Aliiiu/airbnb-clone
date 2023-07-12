'use client';

import useLoginModal from '@/app/hooks/useLoginModal';
import { Menu, Transition } from '@headlessui/react';
import Image from 'next/image';
import React, { Fragment } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { TbWorld } from 'react-icons/tb';

const UserMenu = () => {
	const loginModal = useLoginModal();
	return (
		<div className='relative'>
			<div className='flex items-center gap-5'>
				<span
					onClick={() => {}}
					className='hidden md:block text-sm font-semibold py-3 px-1 rounded-full hover:bg-neutral-100 transition cursor-pointer'
				>
					Airbnb your home
				</span>
				<TbWorld size={22} className='hidden sm:inline-flex' />
				<Menu as={'div'} className={'relative hidden sm:inline-flex'}>
					<Menu.Button className='p-4 md:py-1 md:px-2 border border-neutral-200 flex items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition'>
						<AiOutlineMenu />
						<div className='hidden md:block'>
							<Image
								src={'/images/placeholder.jpg'}
								alt=''
								className='rounded-full'
								width={30}
								height={30}
							/>
						</div>
					</Menu.Button>
					<Transition
						as={Fragment}
						enter='transition ease-out duration-100'
						enterFrom='transform opacity-0 scale-95'
						enterTo='transform opacity-100 scale-100'
						leave='transition ease-in duration-75'
						leaveFrom='transform opacity-100 scale-100'
						leaveTo='transform opacity-0 scale-95'
					>
						<Menu.Items
							className={
								'absolute top-10 right-0 w-56 mt-2 z-50 bg-white shadow-lg rounded-2xl divide-y divide-gray-200'
							}
						>
							<div className='px-4 py-4 flex flex-col gap-5 items-start'>
								<Menu.Item>
									<button
										onClick={loginModal.onOpen}
										className='text-sm font-semibold'
									>
										Sign up
									</button>
								</Menu.Item>
								<Menu.Item>
									<button className='text-sm font-medium'>Log in</button>
								</Menu.Item>
							</div>
							<div className='px-4 py-4 flex flex-col gap-5 items-start'>
								<Menu.Item>
									<button className='text-sm font-medium'>
										Airbnb your home
									</button>
								</Menu.Item>
								<Menu.Item>
									<button className='text-sm font-medium'>Help</button>
								</Menu.Item>
							</div>
						</Menu.Items>
					</Transition>
				</Menu>
			</div>
		</div>
	);
};

export default UserMenu;
