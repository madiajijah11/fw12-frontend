import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import YupPassword from 'yup-password';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import http from '../helpers/http';
import { Icon } from '@iconify-icon/react';

import { setToken } from '../redux/reducers/authReducer';

YupPassword(Yup);

const registerSchema = Yup.object().shape({
  firstName: Yup.string().required('First name is required'),
  lastName: Yup.string().required('Last name is required'),
  phoneNumber: Yup.string().required('Phone number is required'),
  email: Yup.string().email().required('Email is required'),
  password: Yup.string()
    .required('Password is required')
    .minLowercase(1)
    .minUppercase(1)
    .minNumbers(1)
    .minSymbols(1)
    .min(6)
});

const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isDirty }
  } = useForm({
    mode: 'all',
    resolver: yupResolver(registerSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      phoneNumber: '',
      email: '',
      password: ''
    }
  });

  async function onSubmit (values) {
    try {
      const { data } = await http().post('/api/v1/auth/register', values);
      if (data.status !== false) {
        dispatch(setToken(data.token));
        navigate('/');
      }
    } catch (error) {
      setError(error.response.data.message);
    }
  }

  return (
    <>
      <div className='grid sm:grid-cols-[2fr,1.3fr] h-screen'>
        <div className="hidden sm:block bg-[url('../images/background.png')] bg-cover bg-center bg-no-repeat w-full h-full relative">
          <div>
            <div className='absolute top-0 left-0 w-full h-full bg-[#FA86BE] opacity-80'>
              <div className='flex items-center justify-center h-full w-11/12'>
                <div className='text-center'>
                  <h1 className='text-7xl text-white font-bold'>MexL Cinema</h1>
                  <p className='text-5xl text-white font-thin'>
                    The best place to buy movies tickets
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='flex flex-col items-center justify-center mx-8 my-8'>
          <div className='w-2/3 grid gap-7'>
            <div className='text-5xl font-bold'>Sign Up</div>
            <div className='font-thin'>Fill your additional details</div>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className='flex flex-col items-center w-full gap-4'>
              <div className='w-full'>
                <label htmlFor='firstName' className='block text-md font-medium leading-10'>
                  First Name
                </label>
                <input
                  type='text'
                  placeholder='Write your first name'
                  name='firstName'
                  className='input w-full px-4 py-2 border border-[#FA86BE] rounded-md focus:outline-none focus:ring-2 focus:ring-[#A275E3] focus:border-transparent'
                  required
                  disabled={isSubmitting}
                  {...register('firstName')}
                />
              </div>
              {errors.firstName && (
                <div className='text-center border border-[#FA86BE] text-red-500 font-medium p-2 rounded-md mt-1 w-full'>
                  {errors.firstName.message}
                </div>
              )}
              <div className='w-full'>
                <label htmlFor='lastName' className='block text-md font-medium leading-10'>
                  Last Name
                </label>
                <input
                  type='text'
                  placeholder='Write your last name'
                  name='lastName'
                  className='input w-full px-4 py-2 border border-[#FA86BE] rounded-md focus:outline-none focus:ring-2 focus:ring-[#A275E3] focus:border-transparent'
                  required
                  disabled={isSubmitting}
                  {...register('lastName')}
                />
              </div>
              {errors.lastName && (
                <div className='text-center border border-[#FA86BE] text-red-500 font-medium p-2 rounded-md mt-1 w-full'>
                  {errors.lastName.message}
                </div>
              )}
              <div className='w-full'>
                <label htmlFor='phoneNumber' className='block text-md font-medium leading-10'>
                  Phone Number
                </label>
                <input
                  type='tel'
                  placeholder='Write your phone number'
                  name='phoneNumber'
                  className='input w-full px-4 py-2 border border-[#FA86BE] rounded-md focus:outline-none focus:ring-2 focus:ring-[#A275E3] focus:border-transparent'
                  required
                  disabled={isSubmitting}
                  {...register('phoneNumber')}
                />
              </div>
              {errors.phoneNumber && (
                <div className='text-center border border-[#FA86BE] text-red-500 font-medium p-2 rounded-md mt-1 w-full'>
                  {errors.phoneNumber.message}
                </div>
              )}
              <div className='w-full'>
                <label htmlFor='email' className='block text-md font-medium leading-10'>
                  Email
                </label>
                <input
                  type='email'
                  placeholder='Write your email'
                  name='email'
                  className='input w-full px-4 py-2 border border-[#FA86BE] rounded-md focus:outline-none focus:ring-2 focus:ring-[#A275E3] focus:border-transparent'
                  required
                  disabled={isSubmitting}
                  {...register('email')}
                />
              </div>
              {errors.email && (
                <div className='text-center border border-[#FA86BE] text-red-500 font-medium p-2 rounded-md mt-1 w-full'>
                  {errors.email.message}
                </div>
              )}
              <div className='w-full relative'>
                <label htmlFor='password' className='block text-md font-medium leading-10'>
                  Password
                </label>
                <input
                  type={showPassword ? 'text' : 'password'}
                  name='password'
                  placeholder='Password'
                  className='input w-full px-4 py-2 border border-[#FA86BE] rounded-md focus:outline-none focus:ring-2 focus:ring-[#A275E3] focus:border-transparent'
                  required
                  disabled={isSubmitting}
                  {...register('password')}
                />
                <Icon
                  icon={showPassword ? 'bi:eye-slash-fill' : 'bi:eye-fill'}
                  className='absolute text-[#A275E3] cursor-pointer right-4 bottom-3'
                  width={25}
                  height={25}
                  onClick={() => setShowPassword(!showPassword)}
                />
              </div>
              {errors.password && (
                <div className='text-center border border-[#FA86BE] text-red-500 font-medium p-2 rounded-md mt-1 w-full'>
                  {errors.password.message}
                </div>
              )}
              <button
                type='submit'
                className='btn bg-[#FA86BE] hover:bg-[#A275E3] py-2 px-4 text-medium text-white w-full rounded-md font-medium'
                disabled={!isDirty || isSubmitting}>
                Sign Up
              </button>
            </form>
            {error && (
              <div className='text-center border border-[#FA86BE] text-red-500 font-medium p-2 rounded-md'>
                {error}
              </div>
            )}
            <div className='text-center'>
              <div>
                Already have account?{' '}
                <Link
                  to='/signin'
                  className='decoration-[#FA86BE] underline underline-offset-2 font-medium text-[#FA86BE]'>
                  Sign In
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
