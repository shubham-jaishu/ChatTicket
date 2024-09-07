"use client"

import { auth, googleProvider } from './fireBaseOA';
import { signInWithPopup } from 'firebase/auth';

export const signInWithGoogle = async (router: any) => {
  
  try {
    const result = await signInWithPopup(auth, googleProvider);
    // User signed in successfully
    const user = result.user;
    if(user){
      console.log(user);
      router.push("/");
    }
    // ...
  } catch (error) {
    // Handle errors here
    console.error(error);
  }
};
