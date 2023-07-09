'use client';

type THeadingProps = {
	title: string;
	subtitle?: string;
	center?: boolean;
};

const Header: React.FC<THeadingProps> = ({ title, subtitle, center }) => {
	return (
		<div className={center ? 'text-center' : 'text-start'}>
			<div className='text-xl md:text-2xl font-semibold'>{title}</div>
			<div className='font-light text-neutral-500 md:mt-2'>{subtitle}</div>
		</div>
	);
};

export default Header;
