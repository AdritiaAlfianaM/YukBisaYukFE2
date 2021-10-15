/* eslint-disable no-console */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from 'react';
import axios from 'axios';
import { signOut } from 'firebase/auth';
import style from './SignInBtn.module.css';
import { signInWithGoogle, auth } from '../service/auth';

function SignInBtn({ loggedIn, setLoggedIn, name, setName }) {
  useEffect(() => {
    setName(loggedIn && name ? name : '');
  }, [loggedIn]);

  const handleOnClick = async () => {
    const res = await signInWithGoogle();
    const { idToken } = res;
    if (idToken) {
      const response = await axios.post('http://localhost:3001/auth/google-login', { idToken }, { withCredentials: true });
      console.log(response);
      if (response.status === 200) {
        setName(response.data.name); // kalo sukses login buttonnya jadi namamu
        setLoggedIn(true);
      }
      signOut(auth);
    }
  };

  return (
    <a href="#">
      <button type="button" className={style.btn} onClick={handleOnClick}>
        {name || 'Sign-in >'}
      </button>
    </a>
  );
}

export default SignInBtn;
