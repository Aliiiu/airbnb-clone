import { FC } from 'react';
import Slider, { CustomArrowProps, Settings } from 'react-slick';
import Button from './widget/button';
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';

const NextButtonWrapper = (props: CustomArrowProps) => {
	const { onClick, className, style, currentSlide, slideCount } = props;

	if (slideCount && currentSlide === slideCount - 2) {
		return null;
	}

	return (
		<Button
			iconOutline
			icon={BiChevronLeft}
			onClick={onClick}
			className={className}
			style={style}
		/>
	);
};

const PrevButtonWrapper = (props: CustomArrowProps) => {
	const { onClick, className, style, currentSlide } = props;

	if (currentSlide === 0) {
		return null;
	}

	return (
		<Button
			iconOutline
			icon={BiChevronRight}
			onClick={onClick}
			className={className}
			style={style}
		/>
	);
};

const sliderSettings: Settings = {
	className: 'slider',
	dots: true,
	arrows: true,
	speed: 500,
	infinite: false,
	slidesToShow: 10,
	slidesToScroll: 10,
	initialSlide: 0,
	swipeToSlide: true,
	nextArrow: <NextButtonWrapper />,
	prevArrow: <PrevButtonWrapper />,
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
		<div className='w-full bg-orange-200'>
			<Slider {...slideSettings}>{children}</Slider>
		</div>
	);
};
