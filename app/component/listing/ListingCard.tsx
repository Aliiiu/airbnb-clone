'use client';

import React, { FC } from 'react';
import Image, { ImageProps } from 'next/image';
import HeartButton from '../widget/button/Heartbutton';
import { AiTwotoneStar } from 'react-icons/ai';

export type TListItem = {
	imageSrc: ImageProps['src'];
	id: string;
	label: string;
	country: string;
	host: string;
	category: string;
	price: string;
	rating: string;
	reservation: string;
	longitude: number;
	latitude: number;
};

type TListingCard = {
	data: TListItem;
};

const ListingCard: FC<TListingCard> = ({ data }) => {
	return (
		<div className='col-span-1 cursor-pointer group'>
			<div className='flex flex-col gap-1 w-full'>
				{
					<div className='aspect-square w-full relative overflow-hidden rounded-xl'>
						<Image
							fill
							className='object-cover h-full w-full group-hover:scale-110 transition'
							src={data.imageSrc}
							alt='Listing'
						/>
						<div className='absolute top-3 right-3'>
							<HeartButton listingId={data.id} />
						</div>
					</div>
				}
				<div className='flex justify-between'>
					<span className='font-medium'>
						{data?.label}, {data?.country}
					</span>
					<div className='flex items-center gap-1'>
						<span className='font-medium'>{data.rating}</span>
						<AiTwotoneStar />
					</div>
				</div>

				<span className='font-light truncate text-sm capitalize text-neutral-500'>
					{data.host}
				</span>
				<div className='font-light text-sm text-neutral-500'>
					{data.reservation}
				</div>
				<div className='flex flex-row text-sm items-center gap-1'>
					<span className='font-semibold'>${data.price}</span>
					<span className='font-light'>night</span>
				</div>
			</div>
		</div>
	);
};

export default ListingCard;
