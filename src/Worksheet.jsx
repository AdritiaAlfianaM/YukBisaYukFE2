import React, { useEffect } from 'react';
import style from './work.module.css';

function Worksheet() {
  useEffect(() => {
    document.title = 'Worksheet';
  });

  return (
    <div className={style.Home}>
      <div className={style.content}>
        <div className={style.bar}>
          <div className={style.header}>
            <h1>Worksheet</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Worksheet;
