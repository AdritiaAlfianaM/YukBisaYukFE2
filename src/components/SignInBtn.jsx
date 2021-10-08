/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import style from './SignInBtn.module.css';
import { signInWithGoogle } from '../service/auth';

function SignInBtn() {
  const handleOnClick = async () => {
    const res = await signInWithGoogle();
    // eslint-disable-next-line no-console
    console.log(res);
  };

  return (
    <a href="#">
      <button type="button" className={style.btn} onClick={() => handleOnClick()}>
        Sign-in &gt;
      </button>
    </a>
  );
}

// link dengan BE menggunakan axios

export default SignInBtn;
