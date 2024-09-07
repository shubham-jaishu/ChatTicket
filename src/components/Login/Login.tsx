"use client";

import React from 'react';
import Link from 'next/link'; // Import Link from Next.js
import "./Login.css";
import { signInWithGoogle } from "../../config/OAuthLogin"
import { assets } from '@/assets/assets';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const Login = () => {

    const router = useRouter()

    const handleLogin = () => {
        console.log("login");
        router.push("/")
    }

    return (
        <div className="wrapper w-full h-screen bg-white">
            <div className="content h-[410px] flex flex-col justify-between">
                <h3 className='pt-4'>Login Your Account</h3>
                <form className="form h-4/5 flex flex-col mt-2" action="/login" method="post">
                    <input type="email" placeholder="Email" name="email" required className='mt-4 h-10' />
                    <input type="password" placeholder="Password" name="password" required className='h-10' />
                    <input type="submit" value="Login" className='mt-2' onClick={() => {handleLogin()}}/>
                    <div >
                        <button className='flex justify-center items-center w-full gap-x-2 bg-white hover:bg-slate-100 rounded-md p-2 mt-4' onClick={() => {signInWithGoogle(router)}}><Image src={assets.google} alt='Google_icon' id='icon'></Image>Login with Google</button>
                    </div>
                    <Link href="/signup" className='mt-2'>Create new account</Link>
                </form>
            </div>
        </div>
    );
};

export default Login;
