"use client";

import React from 'react';
import Link from 'next/link'; // Import Link from Next.js
import "./Login.css";

const Login = () => {
    return (
        <div className="wrapper w-full h-screen bg-white">
            <div className="content h-[350px] flex flex-col justify-between">
                <h3 className='pt-4'>Login Your Account</h3>
                <form className="form h-3/4 flex flex-col mt-2" action="/login" method="post">
                    <input type="email" placeholder="Email" name="email" required className='mt-4 h-10' />
                    <input type="password" placeholder="Password" name="password" required className='h-10' />
                    <input type="submit" value="Login" className='mt-2' />
                    <Link href="/signup">Create new account</Link>
                </form>
            </div>
        </div>
    );
};

export default Login;
