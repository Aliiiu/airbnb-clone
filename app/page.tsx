'use client';

import { useSearchParams } from 'next/navigation';
import { Container } from './component/appLayout/Container';
import ListingCard from './component/listing/ListingCard';
import { listing } from './constant/listing.data';
import { useEffect, useState } from 'react';
import EmptyState from './component/listing/EmptyState';
import { HiOutlineMap } from 'react-icons/hi';
import Map from './component/map';
import { AiOutlineUnorderedList } from 'react-icons/ai';

export default function Home() {
	const params = useSearchParams();
	const category = params?.get('category');
	const [showMap, setShowMap] = useState(true);
	const [listingData, setListingData] = useState(listing);

	useEffect(() => {
		console.log(category);
		if (category) {
			setListingData((prevState) =>
				prevState.filter((item) => item.category === category.toLowerCase())
			);
		} else {
			setListingData(listing);
		}
	}, [category]);

	if (listingData.length === 0) {
		return (
			<>
				<EmptyState showReset />
			</>
		);
	}

	return (
		<main className=''>
			<Container>
				{showMap ? (
					<div className='pt-24 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8'>
						{listingData.map((listing: any) => (
							<ListingCard key={listing.id} data={listing} />
						))}
					</div>
				) : (
					<div className='pt-24 w-full h-screen'>
						<Map data={listingData} />
					</div>
				)}
			</Container>

			<div className='fixed bottom-12 left-0 right-0 py-6 flex justify-center'>
				<button
					onClick={() => setShowMap((prev) => !prev)}
					className='rounded-[30px] z-10 flex gap-2 items-center bg-black/75 py-3 px-4 text-white'
				>
					{showMap ? 'Show map' : 'Show list'}
					{showMap ? (
						<HiOutlineMap fill='#fff' size={22} />
					) : (
						<AiOutlineUnorderedList />
					)}
				</button>
			</div>
		</main>
	);
}
