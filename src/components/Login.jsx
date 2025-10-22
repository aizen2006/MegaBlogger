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
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className='mx-auto  w-full max-w-lg bg-grey-100 rounded-xl p-10 border border-black/10'>
                <div className='mb-8 text-center'>
                    <span className='inline-block w-full max-w-[100px]'>
                        <Logo width='100%' />
                    </span>
                </div>
                <h1 className='text-2xl font-bold leading-tight text-center'>SignIn to your Account</h1>
                <p className='mt-2 text-center text-base text-black/60'>
                    Don&apos;t have an account?&nbsp;
                    <Link 
                    to='/signup'
                    className='font-medium text-primary transition-all duratio-200 hover:underline'
                    >
                        SignUp
                    </Link>

                </p>
                {error && <p className='mt-8  text-red-600 text-center'>{error}</p>}
                <form
                onSubmit={handleSubmit(login)}
                className='mt-8 space-y-6'>
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