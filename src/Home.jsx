import React, { useEffect } from 'react';
import Sidebar from './components/Sidebar';
import style from './Home.module.css';
import SignInBtn from './components/SignInBtn';

function Home() {
  useEffect(() => {
    document.title = 'Home';
  });

  return (
    <div className={style.Home}>
      <Sidebar />
      <div className={style.content}>
        <div className={style.header}>
          <h1>
            Jadwalkan
            <br />
            Agendamu di
            <br />
            Yuk Bisa Yuk!
          </h1>
        </div>
        <div className={style.description}>
          <p>
            Yuk Bisa Yuk merupakan sebuah website pengelola agenda
            <br /> yang diharapkan dapat membuat kegiatan sehari-hari
            <br /> menjadi lebih teratur dan terencana. Web ini
            <br /> rencananya dibuat khusus untuk lab B401.
          </p>
        </div>
        <SignInBtn />
      </div>
    </div>
  );
}

export default Home;
