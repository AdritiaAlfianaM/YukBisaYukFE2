import React, { useEffect } from 'react';
import Sidebar from './components/Sidebar';
import style from './Home.module.css';

function Home2() {
  useEffect(() => {
    document.title = 'Home2';
  });

  return (
    <div className={style.Home}>
      <Sidebar />
      {/* (ada tambahan logout dan Logo acc dibawah) */}
      <div className={style.content}>
        <div className={style.header}>
          <h1>
            Buruan
            <br />
            Cek Agendamu
            <br />
            Sekarang!
          </h1>
        </div>
        <div className={style.description}>
          <p>
            Jangan pernah berhenti belajar,
            <br /> karena hidup tak pernah berhenti mengajari
            <br /> Terus catat agendamu bersama Yuk Bisa Yuk!
          </p>
        </div>
        <div className={style.welcome}>
          <p>Welcome, Adritia</p>
          {/* Adritia harusnya ganti sesuai nama google */}
        </div>
      </div>
    </div>
  );
}

export default Home2;
