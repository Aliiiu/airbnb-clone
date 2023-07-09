'use client';

import { IconType } from 'react-icons';

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	label?: string;
	disabled?: boolean;
	outline?: boolean;
	small?: boolean;
	icon?: IconType;
	iconStyle?: string;
	iconOutline?: boolean;
	className?: string;
}

const Button: React.FC<IButtonProps> = ({
	label,
	disabled,
	outline,
	small,
	icon: Icon,
	iconStyle,
	className,
	iconOutline,
	...rest
}) => {
	if (iconOutline) {
		return (
			<button
				{...rest}
				className={`flex justify-center cursor-pointer items-center w-7 h-7 border rounded-full ${className}`}
			>
				{Icon && <Icon size={20} className={`${iconStyle}`} />}
			</button>
		);
	}
	return (
		<button
			disabled={disabled}
			{...rest}
			className={`
        relative
        disabled:opacity-70
        disabled:cursor-not-allowed
        rounded-lg
        hover:opacity-80
        transition
        w-full
				px-2
        ${outline ? 'bg-white' : 'bg-rose-500'}
        ${outline ? 'border-black' : 'border-rose-500'}
        ${outline ? 'text-black' : 'text-white'}
        ${small ? 'text-sm' : 'text-md'}
        ${small ? 'py-1' : 'py-3'}
        ${small ? 'font-light' : 'font-semibold'}
        ${small ? 'border-[1px]' : 'border-2'}
      `}
		>
			{Icon && (
				<Icon size={24} className={`absolute left-4 top-3 ${iconStyle}`} />
			)}
			{label}
		</button>
	);
};

export default Button;