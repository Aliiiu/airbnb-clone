'use client';

import React from 'react';
import { Container } from '../Container';
import Logo from './Logo';
import Search from './Search';
import UserMenu from './UserMenu';
import Category from './category';

const NavBar = () => {
	return (
		<div className='fixed w-full bg-white z-10 shadow-sm'>
			<div className='border-b py-4 '>
				<Container>
					<div className='flex items-center justify-between gap-3 md:gap-0'>
						<Logo />
						<Search />
						<UserMenu />
					</div>
				</Container>
			</div>
			<Category />
		</div>
	);
};

export default NavBar;
