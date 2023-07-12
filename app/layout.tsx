import Head from 'next/head';
import NavBar from './component/appLayout/navbar/NavBar';
import LoginModal from './component/widget/modal/loginModal';
import './globals.css';
import 'mapbox-gl/dist/mapbox-gl.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Nunito } from 'next/font/google';
import Footer from './component/appLayout/Footer';
import { Metadata } from 'next';

const font = Nunito({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Vacation Homes & Condo Rental - Airbnb - Airbnb',
	description: 'Airbnb your home',
	icons: {
		icon: {
			url: '/airbnb.svg',
			type: 'image/svg+xml',
		},
		shortcut: { url: '/airbib.svg', type: 'image/svg+xml' },
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<body className={font.className}>
				<LoginModal />
				<NavBar />
				<div className='pb-20 pt-28'>{children}</div>
				<Footer />
			</body>
		</html>
	);
}
