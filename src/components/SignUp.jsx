import React , {useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import authService from '../appwrite/auth.js'
import {useDispatch} from 'react-redux'
import {set, useForm} from 'react-hook-form'
import {login as authLogin} from '../store/authSlice.js'
import {Btn, Input, Logo} from './index.js'

function SignUp() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {register, handleSubmit} = useForm();
    const [error , setError] = useState('');

    const create = async(data) => {
        setError('');
        try {
            const userData = await authService.createAccount(data);
            if(userData){
                const userData = await authService.getCurrentUser();
                if(userData) dispatch(authLogin(userData));
                navigate('/');
            }
        } catch (error) {
            setError(error.message);
        }
    }

  return (
    <div className='flex items-center justify-center'>
        <div className={`mx-auto w-full max-w-lg bg-grey-100 rounded-xl p-10 border border-black/10 `}>
            <div className='mb-2 flex justify-center text-center'>
                <span className='inline-block w-full max-w-[100px]'>
                    <Logo width='100%' />
                </span>
            </div>
            <h2 className='text-center text-2xl font-bold leading-tight'>Sign up to create your account</h2>
            <p className='mt-2 text-center text-base text-black/60  '>
                Already have an account?&nbsp;
                <Link 
                to='/login'
                className='font-semibold text-blue-500 hover:text-blue-700'
                >
                    Log in
                </Link>
            </p>
            {error && <p className='mt-8 text-red-600 text-center'>{error}</p>}
            <form action="" onSubmit={handleSubmit(create)}>
                <div className='space-y-5'>
                    <Input
                        label='FullName: '
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
                <div>
                    <Input
                        label='Password: '
                        type='password'
                        placeholder='Enter your password'
                        {...register('password', { required: true })}
                    />
                </div>
                <Btn
                type='submit'
                className='w-full mt-8'
                >Create Account</Btn>
            </form>
        </div>
    </div>
  )
}

export default SignUp