/* eslint-disable no-console */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import axios from 'axios';
import { signOut } from 'firebase/auth';
import style from './SignInBtn.module.css';
import { signInWithGoogle, auth } from '../service/auth';

function SignInBtn() {
  const handleOnClick = async () => {
    const res = await signInWithGoogle();
    const { idToken } = res;
    if (idToken) {
      const response = await axios.post('http://localhost:3001/auth/google-login', { idToken }, { withCredentials: true });
      console.log(response);
      signOut(auth);
    }
  };

  return (
    <a href="#">
      <button type="button" className={style.btn} onClick={handleOnClick}>
        Sign-in &gt;
      </button>
    </a>
  );
}

export default SignInBtn;
