"use client";

import React from 'react';
import "./Signup.css";
import Link from 'next/link';

const Signup = () => {
  return (
    <div className="wrapper w-full h-screen bg-white">
      <div className="content h-[520px] flex flex-col justify-between">
        <h3 className='mt-3'>Create Account</h3>
        <form className="form text-black h-[400px]" action="/register" method="post">
          <input type="text" placeholder="Username" name="username" required className='mt-2' />
          <input type="text" placeholder="Name" name="name" required />
          <input type="number" placeholder="Age" name="age" required />
          <input type="email" placeholder="Email" name="email" required />
          <input type="password" placeholder="Password" name="password" required />
          <input type="submit" value="Create" className='mt-3'/>
          <Link href="/login">Already have account</Link>
        </form>
      </div>
    </div>
  );
};

export default Signup;
