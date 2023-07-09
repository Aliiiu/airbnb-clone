import Head from 'next/head';
import NavBar from './component/appLayout/navbar/NavBar';
import LoginModal from './component/widget/modal/loginModal';
import './globals.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Nunito } from 'next/font/google';
import Footer from './component/appLayout/Footer';

const font = Nunito({ subsets: ['latin'] });

export const metadata = {
	title: 'Vacation Homes & Condo Rental - Airbnb - Airbnb',
	description: 'Airbnb your home',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<Head>
				<link rel='icon' href='/airbnb.svg' />
			</Head>
			<body className={font.className}>
				<LoginModal />
				<NavBar />
				<div className='pb-20 pt-28'>{children}</div>
				<Footer />
			</body>
		</html>
	);
}
