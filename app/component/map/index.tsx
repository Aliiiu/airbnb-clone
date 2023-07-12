'use client';

import { useState } from 'react';
import ReactMapGl, { Marker } from 'react-map-gl';
import { TListItem } from '../listing/ListingCard';
import { getCenter } from 'geolib';

const Map = ({ data }: { data: TListItem[] }) => {
	const coordinates = data.map((item) => ({
		longitude: item.longitude,
		latitude: item.latitude,
	}));

	const center = getCenter(coordinates) as {
		longitude: number;
		latitude: number;
	};

	const [viewState, setViewState] = useState({
		longitude: center.longitude,
		latitude: center.latitude,
		zoom: 11,
		width: '100%',
		height: '100%',
	});

	console.log(process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN);
	return (
		<ReactMapGl
			{...viewState}
			mapStyle={'mapbox://styles/aliiiu/cljy56zjj004t01pf0k4l1d4u'}
			mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}
			onMove={(evt) =>
				setViewState({ ...evt.viewState, width: '100%', height: '100%' })
			}
		>
			{data.map((item) => (
				<div key={item.id}>
					<Marker
						longitude={item.longitude}
						latitude={item.latitude}
						color='red'
					>
						<span className='px-2 py-1 bg-white border-2 rounded-[30px]'>
							${item.price}
						</span>
					</Marker>
				</div>
			))}
		</ReactMapGl>
	);
};

export default Map;
