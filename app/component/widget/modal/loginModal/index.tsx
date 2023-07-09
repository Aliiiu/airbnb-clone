'use client';

import React, { useState } from 'react';
import Modal from '..';
import useLoginModal from '@/app/hooks/useLoginModal';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import Header from '../Header';
import { TextField } from '../../form/FormComponent';
import Button from '../../button';
import { FcGoogle } from 'react-icons/fc';
import { AiFillGithub, AiFillApple, AiFillFacebook } from 'react-icons/ai';
import { CiMail } from 'react-icons/ci';

const LoginModal = () => {
	const loginModal = useLoginModal();
	const [isLoading, setIsLoading] = useState(false);

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FieldValues>({
		defaultValues: {
			email: '',
			password: '',
		},
	});

	const onSubmit: SubmitHandler<FieldValues> = (data) => {
		setIsLoading(true);

		// signIn('credentials', {
		// 	...data,
		// 	redirect: false,
		// }).then((callback) => {
		// 	setIsLoading(false);

		// 	if (callback?.ok) {
		// 		toast.success('Logged in');
		// 		router.refresh();
		// 		loginModal.onClose();
		// 	}

		// 	if (callback?.error) {
		// 		toast.error(callback.error);
		// 	}
		// });
	};

	const bodyContent = (
		<div className='flex flex-col gap-4'>
			<Header title='Welcome to Airbnb' />
			<TextField
				id='email'
				label='Email'
				disabled={isLoading}
				register={register}
				errors={errors}
				required
			/>
			<TextField
				id='password'
				label='Password'
				type='password'
				disabled={isLoading}
				register={register}
				errors={errors}
				required
			/>
		</div>
	);

	const footerContent = (
		<div className='flex flex-col gap-4 mt-3'>
			<hr />
			<Button
				outline
				label='Continue with Facebook'
				icon={AiFillFacebook}
				iconStyle='text-blue-500'
				onClick={() => {}}
			/>
			<Button
				outline
				label='Continue with Google'
				icon={FcGoogle}
				onClick={() => {}}
			/>
			<Button
				outline
				label='Continue with Apple'
				icon={AiFillApple}
				onClick={() => {}}
			/>
			<Button
				outline
				label='Continue with Email'
				icon={CiMail}
				onClick={() => {}}
			/>
		</div>
	);

	return (
		<Modal
			disabled={isLoading}
			isOpen={loginModal.isOpen}
			title='Log in or sign up'
			actionLabel='Continue'
			onClose={loginModal.onClose}
			onSubmit={handleSubmit(onSubmit)}
			content={bodyContent}
			footer={footerContent}
		/>
	);
};

export default LoginModal;
