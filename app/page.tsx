'use client';

import { useSearchParams } from 'next/navigation';
import { Container } from './component/appLayout/Container';
import ListingCard from './component/listing/ListingCard';
import { listing } from './constant/listing.data';
import { useEffect, useState } from 'react';
import EmptyState from './component/listing/EmptyState';

export default function Home() {
	const params = useSearchParams();
	const category = params?.get('category');
	const [listingData, setListingData] = useState(listing);

	useEffect(() => {
		console.log(category);
		if (category) {
			setListingData((prevState) =>
				prevState.filter((item) => item.category === category)
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
				<div className='pt-24 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8'>
					{listingData.map((listing: any) => (
						<ListingCard key={listing.id} data={listing} />
					))}
				</div>
			</Container>
		</main>
	);
}
