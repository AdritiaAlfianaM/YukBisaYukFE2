import React from 'react';
import PacmanLoader from 'react-spinners/PacmanLoader';
import style from './Loading.module.css';

function Loading() {
  return (
    <div className={style.loadingScreen}>
      <div className={style.content}>Loading...</div>
      <div className={style.spinner}>
        <PacmanLoader color="#961B1B" />
      </div>
    </div>
  );
}

export default Loading;
