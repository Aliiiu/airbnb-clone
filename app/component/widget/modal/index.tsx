import { Dialog, Transition } from '@headlessui/react';
import React, { FC, Fragment, useCallback, useEffect, useState } from 'react';
import { IoMdClose } from 'react-icons/io';
import Button from '../button';

type TModalProps = {
	isOpen?: boolean;
	onClose: () => void;
	onSubmit: () => void;
	title?: string;
	content?: React.ReactElement;
	footer?: React.ReactElement;
	actionLabel: string;
	disabled?: boolean;
	secondaryAction?: () => void;
	secondaryActionLabel?: string;
};

const Modal: FC<TModalProps> = ({
	isOpen,
	onClose,
	onSubmit,
	title,
	content,
	actionLabel,
	footer,
	disabled,
	secondaryAction,
	secondaryActionLabel,
}) => {
	const [showModal, setShowModal] = useState(isOpen);

	useEffect(() => {
		setShowModal(isOpen);
	}, [isOpen]);

	const handleClose = useCallback(() => {
		if (disabled) {
			return;
		}

		setShowModal(false);
		setTimeout(() => {
			onClose();
		}, 300);
	}, [onClose, disabled]);

	const handleSubmit = useCallback(() => {
		if (disabled) {
			return;
		}

		onSubmit();
	}, [onSubmit, disabled]);

	const handleSecondaryAction = useCallback(() => {
		if (disabled || !secondaryAction) {
			return;
		}

		secondaryAction();
	}, [secondaryAction, disabled]);
	return (
		<Transition show={showModal} as={Fragment}>
			<Dialog
				onClose={handleClose}
				className={
					'fixed z-50 inset-0 flex justify-center items-center overflow-x-hidden max-h-screen overflow-y-auto'
				}
			>
				<Transition.Child
					as={Fragment}
					enter='ease-out duration-300'
					enterFrom='opacity-0'
					enterTo='opacity-100'
					leave='ease-in duration-200'
					leaveFrom='opacity-100'
					leaveTo='opacity-0'
				>
					<Dialog.Overlay
						onClick={handleClose}
						className='fixed inset-0 bg-neutral-800/40'
					/>
				</Transition.Child>

				{/* This element is to trick the browser into centering the modal contents. */}
				<span
					className='hidden sm:inline-block sm:align-middle sm:h-screen'
					aria-hidden='true'
				>
					&#8203;
				</span>
				<Transition.Child
					as={Fragment}
					enter='ease-out duration-300'
					enterFrom='translate-y-full opacity-0'
					enterTo='opacity-100 translate-y-0'
					leave='ease-in duration-300'
					leaveFrom='opacity-100 translate-y-0'
					leaveTo='opacity-0 translate-y-full'
				>
					<div className='relative w-full md:w-4/6 lg:w-3/6 xl:w-2/5 my-6 mx-auto h-full lg:h-auto md:h-auto'>
						<div className='translate h-full lg:h-auto md:h-auto border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none'>
							{/*header*/}
							<div className='flex items-center p-6 rounded-t justify-center relative border-b'>
								<button
									className='p-1 border-0 hover:opacity-70 transition absolute left-9'
									onClick={handleClose}
								>
									<IoMdClose size={18} />
								</button>
								<div className='text-lg font-semibold'>{title}</div>
							</div>
							{/*body*/}
							<div className='relative p-6 flex-auto'>{content}</div>
							{/*footer*/}
							<div className='flex flex-col gap-2 p-6'>
								<div
									className='
                                  flex 
                                  flex-row 
                                  items-center 
                                  gap-4 
                                  w-full
                                '
								>
									{secondaryAction && secondaryActionLabel && (
										<Button
											disabled={disabled}
											label={secondaryActionLabel}
											onClick={handleSecondaryAction}
											outline
										/>
									)}
									<Button
										disabled={disabled}
										label={actionLabel}
										onClick={handleSubmit}
									/>
								</div>
								{footer}
							</div>
						</div>
					</div>
				</Transition.Child>
			</Dialog>
		</Transition>
	);
};

export default Modal;
