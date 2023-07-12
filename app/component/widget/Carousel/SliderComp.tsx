import { FC } from 'react';
import Slider, { CustomArrowProps, Settings } from 'react-slick';
import Button from '../button';
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';

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

const sliderSettings: Settings = {
	className: 'slider',
	infinite: false,
	arrows: true,
	dots: false,
	nextArrow: <NextArrow />,
	prevArrow: <PrevArrow />,
	speed: 500,
	slidesToShow: 14.8,
	slidesToScroll: 10,
	swipeToSlide: true,
	initialSlide: 0,
	responsive: [
		{
			breakpoint: 1400,
			settings: {
				slidesToShow: 11.7,
				slidesToScroll: 8,
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

interface ISliderCarouselProps {
	children: React.ReactNode;
	settings?: Settings;
}

export const SliderCarousel: FC<ISliderCarouselProps> = ({
	children,
	settings,
}) => {
	const slideSettings = settings
		? { ...sliderSettings, ...settings }
		: sliderSettings;

	return (
		<div className='w-full'>
			<Slider {...slideSettings}>{children}</Slider>
		</div>
	);
};
