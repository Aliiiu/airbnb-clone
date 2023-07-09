'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { Container } from '../../Container';
import { categories } from '../../../../constant/categories.data';
import CategoryBox from './CategoryBox';
import { PiSlidersHorizontalBold } from 'react-icons/pi';
import { BiChevronRight, BiChevronLeft } from 'react-icons/bi';
import Slider, { CustomArrowProps, Settings } from 'react-slick';
import { useRef, useState } from 'react';
import Button from '@/app/component/widget/button';

const PrevArrow: React.FC<CustomArrowProps> = ({ className, onClick }) => (
	<Button
		iconOutline
		onClick={onClick}
		icon={BiChevronLeft}
		className={`z-10 bg-white ${className} ${
			onClick ? 'hidden md:flex' : 'hidden'
		}`}
	/>
);

const NextArrow: React.FC<CustomArrowProps> = ({ className, onClick }) => {
	return (
		<Button
			iconOutline
			onClick={onClick}
			icon={BiChevronRight}
			className={`z-10 bg-white border ${className} ${
				onClick ? 'hidden md:flex' : 'hidden'
			}`}
		/>
	);
};

const settings: Settings = {
	className: 'slider',
	infinite: false,
	arrows: true,
	dots: false,
	nextArrow: <NextArrow />,
	prevArrow: <PrevArrow />,
	speed: 500,
	slidesToShow: 14.8,
	slidesToScroll: 15,
	swipeToSlide: true,
	initialSlide: 0,
	responsive: [
		{
			breakpoint: 1400,
			settings: {
				slidesToShow: 11.7,
				slidesToScroll: 12,
			},
		},
		{
			breakpoint: 1284,
			settings: {
				slidesToShow: 10,
				slidesToScroll: 6,
			},
		},
		{
			breakpoint: 1024,
			settings: {
				slidesToShow: 8,
				slidesToScroll: 5,
			},
		},
		{
			breakpoint: 800,
			settings: {
				slidesToShow: 6,
				slidesToScroll: 5,
			},
		},
		{
			breakpoint: 600,
			settings: {
				slidesToShow: 4,
				slidesToScroll: 3,
			},
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 3.8,
				slidesToScroll: 4,
			},
		},
	],
};

const Category = () => {
	const sliderRef = useRef<Slider | null>(null);
	const [isFirstSlide, setIsFirstSlide] = useState(true);
	const [isLastSlide, setIsLastSlide] = useState(false);
	const params = useSearchParams();
	const category = params?.get('category');
	const pathname = usePathname();
	const isMainPage = pathname === '/';

	if (!isMainPage) {
		return null;
	}

	return (
		<Container>
			<div className='pt-4 flex justify-between gap-4 items-center'>
				<div className=' bg-orange-100 w-full md:w-[85%] lg:w-[85%] xl:w-[90%]'>
					<Slider ref={sliderRef} {...settings}>
						{categories.map((item) => (
							<CategoryBox
								key={item.label}
								label={item.label}
								icon={item.icon}
								imgSrc={item.imgSrc}
								selected={category === item.label}
							/>
						))}
					</Slider>
				</div>

				<button className='hidden md:flex gap-1 py-2 items-center rounded-lg px-2 md:px-4 h-10 md:h-12 w-fit cursor-pointer border'>
					<PiSlidersHorizontalBold />
					<span className='text-xs font-medium'>Filters</span>
				</button>
			</div>
		</Container>
	);
};

export default Category;
