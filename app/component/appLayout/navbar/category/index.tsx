'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { Container } from '../../Container';
import { categories } from './categories.data';
import CategoryBox from './CategoryBox';
import { PiSlidersHorizontalBold } from 'react-icons/pi';
import { SliderCarousel } from '@/app/component/widget/Carousel/SliderComp';

const Category = () => {
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
				<div className='w-full md:w-[85%] lg:w-[85%] xl:w-[90%]'>
					<SliderCarousel>
						{categories.map((item) => (
							<CategoryBox
								key={item.label}
								label={item.label}
								icon={item.icon}
								imgSrc={item.imgSrc}
								selected={category === item.label}
							/>
						))}
					</SliderCarousel>
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
