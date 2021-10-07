import React, { useEffect } from 'react';
import Sidebar from './components/Sidebar';
import style from './Username.module.css';

function username() {
  useEffect(() => {
    document.title = 'username';
  });

  return (
    <div className={style.Home}>
      <Sidebar />
      <div className={style.username}>
        <input type="text" />
      </div>
      <div className={style.submit}>
        <a href="#">
          <button type="submit">Submit &gt;</button>
        </a>
      </div>
    </div>
  );
}

// KAYAE INI NGGA KEPAKE  SI

export default username;
