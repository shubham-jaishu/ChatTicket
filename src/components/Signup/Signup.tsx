"use client";

import React from 'react';
import "./Signup.css";
import Link from 'next/link';
import { signInWithGoogle } from "../../config/OAuthLogin"
import { assets } from '@/assets/assets';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const Signup = () => {

  const router = useRouter()

  return (
    <div className="wrapper w-full h-screen bg-white">
      <div className="content h-[570px] flex flex-col justify-between">
        <h3 className='mt-3'>Create Account</h3>
        <form className="form text-black h-[470px]" action="/" method="post">
          <input type="text" placeholder="Username" name="username" required className='mt-2' />
          <input type="text" placeholder="Name" name="name" required />
          <input type="number" placeholder="Age" name="age" required />
          <input type="email" placeholder="Email" name="email" required />
          <input type="password" placeholder="Password" name="password" required />
          <input type="submit" value="Create" className='mt-3' />
        </form>
        <div >
          <button className='flex justify-center items-center w-full gap-x-2 bg-white hover:bg-slate-100 rounded-md p-2 mt-4' onClick={() => { signInWithGoogle(router) }}><Image src={assets.google} alt='Google_icon' id='icon'></Image>Signin with Google</button>
        </div>
        <Link href="/login" className='mt-3'>Already have account</Link>
      </div>
    </div>
  );
};

export default Signup;
