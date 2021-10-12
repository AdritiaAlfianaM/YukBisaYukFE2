import React, { useEffect } from 'react';
import style from './work.module.css';

function Notification() {
  useEffect(() => {
    document.title = 'Notification';
  });

  return (
    <div className={style.Home}>
      <div className={style.content}>
        <div className={style.bar}>
          <div className={style.header}>
            <h1>Notification</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Notification;
