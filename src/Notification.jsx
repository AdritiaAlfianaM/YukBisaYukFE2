import React, { useEffect } from 'react';
import Sidebar from './components/Sidebar';
import style from './work.module.css';

function Notification() {
  useEffect(() => {
    document.title = 'Notification';
  });

  return (
    <div className={style.Home}>
      <Sidebar />
      <div className={style.content}>
        <div className={style.header}>
          <h1>Notification</h1>
        </div>
      </div>
    </div>
  );
}

export default Notification;
