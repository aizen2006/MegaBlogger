import React , {useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import authService from '../appwrite/auth.js'
import {useDispatch} from 'react-redux'
import { useForm } from 'react-hook-form'
import {login as authLogin} from '../store/authSlice.js'
import Btn from './Btn.jsx'
import Input from './Input.jsx'
import Logo from './Logo.jsx'

export default function SignUp() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {register, handleSubmit} = useForm();
    const [error , setError] = useState('');

    const create = async(data) => {
        setError('');
        try {
            const userAccount = await authService.createAccount(data);
            if(userAccount){
                // Prefer existing session if present, else login
                let userStatus = await authService.getCurrentUser();
                if (!userStatus) {
                    await authService.login({ email: data.email, password: data.password });
                    userStatus = await authService.getCurrentUser();
                }
                if(userStatus) dispatch(authLogin(userStatus));
                navigate('/');
            }
        } catch (error) {
            setError(error.message);
        }
    }

  return (
    <div className='flex items-center justify-center min-h-screen py-12 px-4'>
        <div 
            className='mx-auto w-full max-w-lg rounded-2xl p-10 shadow-2xl'
            style={{ 
                backgroundColor: '#FFFFFF',
                border: '3px solid #B8A9CA'
            }}
        >
            <div className='mb-8 flex justify-center text-center'>
                <span className='inline-block w-full max-w-[100px]'>
                    <Logo width='100%' />
                </span>
            </div>
            <h2 
                className='text-center text-3xl font-bold leading-tight mb-2'
                style={{ color: '#FA9A91' }}
            >
                Create Your Account
            </h2>
            <p className='mt-2 text-center text-base' style={{ color: '#4A4A4A' }}>
                Already have an account?&nbsp;
                <Link 
                    to='/login'
                    className='font-semibold transition-all duration-200 hover:underline'
                    style={{ color: '#B8A9CA' }}
                >
                    Log In
                </Link>
            </p>
            {error && (
                <p 
                    className='mt-6 p-4 rounded-lg text-center font-medium'
                    style={{ backgroundColor: '#FFE5E5', color: '#D32F2F' }}
                >
                    {error}
                </p>
            )}
            <form onSubmit={handleSubmit(create)} className='mt-8'>
                <div className='space-y-5'>
                    <Input
                        label='Full Name: '
                        placeholder='Enter your Full name'
                        {...register('name', { required: true })}
                    />
                </div>
                <div className='space-y-5'>
                    <Input
                        label='Email: '
                        placeholder='Enter your email'
                        type='email'
                        {...register('email', { required: true , validate:{ matchpattern : (value) => /^([\w\.\-_]+)?\w+@[\w-_]+(\.\w+){1,}$/.test(value) || "Email address must be a Valid address" }})}
                    />
                </div>
                <div className='space-y-5'>
                    <Input
                        label='Password: '
                        type='password'
                        placeholder='Enter your password'
                        {...register('password', { required: true })}
                    />
                </div>
                <Btn type='submit' className='w-full mt-8'>
                    Create Account
                </Btn>
            </form>
        </div>
    </div>
  )
}

