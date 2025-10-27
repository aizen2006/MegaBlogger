import React from 'react'
import { Link , useNavigate } from'react-router-dom'
import {login as authLogin } from '../store/authSlice.js'
import {Btn , Input , Logo} from './index.js'
import {useDispatch} from 'react-redux'
import authService from '../appwrite/auth.js'
import {set, useForm} from 'react-hook-form'


function Login() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {register, handleSubmit} = useForm();
    const [error , setError] = React.useState('');
    const login = async(data) => {
        setError('');
        try {
            const session = await authService.login(data)
            if (session) {
                const userData = await authService.getCurrentUser(data)
                if (userData) dispatch(authLogin(userData));
                navigate('/');

            }
        } catch (error) {
            setError(error.message);
        }
    }
    return(
        <div className="min-h-screen flex items-center justify-center py-12 px-4">
            <div 
                className='mx-auto w-full max-w-lg rounded-2xl p-10 shadow-2xl'
                style={{ 
                    backgroundColor: '#FFFFFF',
                    border: '3px solid #FADDA3'
                }}
            >
                <div className='mb-8 text-center'>
                    <span className='inline-block w-full max-w-[100px]'>
                        <Logo width='100%' />
                    </span>
                </div>
                <h1 
                    className='text-3xl font-bold leading-tight text-center mb-2'
                    style={{ color: '#FA9A91' }}
                >
                    Sign In to Your Account
                </h1>
                <p className='mt-2 text-center text-base' style={{ color: '#4A4A4A' }}>
                    Don&apos;t have an account?&nbsp;
                    <Link 
                        to='/signup'
                        className='font-semibold transition-all duration-200 hover:underline'
                        style={{ color: '#B8A9CA' }}
                    >
                        Sign Up
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
                <form
                    onSubmit={handleSubmit(login)}
                    className='mt-8 space-y-6'
                >
                    <div className='space-y-5'>
                        <Input
                            label='Email: '
                            placeholder='Enter your email'
                            type='email'
                            {...register('email', { required: true , validate:{ matchpattern : (value) => /^([\w\.\-_]+)?\w+@[\w-_]+(\.\w+){1,}$/.test(value) || "Email address must be a Valid address" }})}
                        />
                    </div>
                    <div>
                        <Input
                            label='Password: '
                            type='password'
                            placeholder='Enter your password'
                            {...register('password', { required: true })}
                        />
                    </div>
                    <div>
                        <Btn type='submit' className='w-full'>
                            Sign In
                        </Btn>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login