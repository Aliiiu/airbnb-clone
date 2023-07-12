'use client';

import qs from 'query-string';
import { useRouter, useSearchParams } from 'next/navigation';
import { FC, useCallback } from 'react';
import { IconType } from 'react-icons';
import Image from 'next/image';

type TCategoryBoxProps = {
	icon?: IconType;
	label: string;
	selected?: boolean;
	imgSrc?: string;
};

const IconImage = ({ src }: { src: string }) => {
	return (
		<div className='relative w-5 h-5'>
			<Image alt='icon' src={src} fill objectFit='contain' />
		</div>
	);
};

const CategoryBox: FC<TCategoryBoxProps> = ({
	icon: Icon,
	label,
	selected,
	imgSrc,
}) => {
	const router = useRouter();
	const params = useSearchParams();

	const handleClick = useCallback(() => {
		let currentQuery = {};

		if (params) {
			currentQuery = qs.parse(params.toString());
		}

		const updatedQuery: any = {
			...currentQuery,
			category: label,
		};

		if (params?.get('category') === label) {
			delete updatedQuery.category;
		}

		const url = qs.stringifyUrl(
			{
				url: '/',
				query: updatedQuery,
			},
			{ skipNull: true }
		);

		router.push(url);
	}, [label, router, params]);

	return (
		<div
			onClick={handleClick}
			className={`flex flex-col items-center justify-center gap-2 border-b-2 hover:text-neutral-800 transition cursor-pointer ${
				selected ? 'border-b-neutral-800' : 'border-transparent'
			} ${selected ? 'text-neutral-800' : 'text-neutral-500'}
      `}
		>
			{imgSrc ? <IconImage src={imgSrc} /> : Icon ? <Icon size={26} /> : ''}
			<span className='font-medium truncate text-xs'>{label}</span>
		</div>
	);
};

export default CategoryBox;
