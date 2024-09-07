import { auth, googleProvider } from './fireBaseOA';
import { signInWithPopup } from 'firebase/auth';

export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    // User signed in successfully
    const user = result.user;
    // ...
  } catch (error) {
    // Handle errors here
    console.error(error);
  }
};
