/* eslint-disable no-console */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useContext } from 'react';
import axios from 'axios';
import { signOut } from 'firebase/auth';
import style from './SignInBtn.module.css';
import { signInWithGoogle, auth } from '../service/auth';
import LoadingContext from '../contexts/LoadingContext';

function SignInBtn({ loggedIn, setLoggedIn, name, setName }) {
  const { setLoading } = useContext(LoadingContext);
  useEffect(() => {
    setName(loggedIn && name ? name : '');
  }, [loggedIn]);

  const handleOnClick = async () => {
    setLoading(true);
    const res = await signInWithGoogle();
    const { idToken } = res;
    if (idToken) {
      const response = await axios.post('http://localhost:3001/auth/google-login', { idToken }, { withCredentials: true });
      console.log(response);
      if (response.status === 200) {
        setName(response.data.name); // kalo sukses login buttonnya jadi nama
        localStorage.setItem('name', response.data.name);
        setLoggedIn(true);
      }
      signOut(auth);
    }
    setLoading(false);
  };

  return (
    <button type="button" className={style.btn} onClick={handleOnClick} disabled={loggedIn ? 'true' : ''}>
      {name ? name.split(' ')[0] : 'Sign-in >'}
    </button>
  );
}

export default SignInBtn;
