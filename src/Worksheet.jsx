import React, { useEffect } from 'react';
import Sidebar from './components/Sidebar';
import style from './work.module.css';

function Worksheet() {
  useEffect(() => {
    document.title = 'Worksheet';
  });

  return (
    <div className={style.Home}>
      <Sidebar />
      {/* (ada tambahan logout dan Logo acc dibawah) */}
      <div className={style.content}>
        <div className={style.header}>
          <h1>Worksheet</h1>
        </div>
        {/* ADA ICON ADD DAN TULISAN ADD PROJECT */}
      </div>
    </div>
  );
}

export default Worksheet;
