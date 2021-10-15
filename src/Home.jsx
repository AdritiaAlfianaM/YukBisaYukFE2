import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import style from './Home.module.css';
import SignInBtn from './components/SignInBtn';

function Home({ loggedIn, setLoggedIn }) {
  const [name, setName] = useState('');

  useEffect(() => {
    document.title = 'Home';
  }, []);

  useEffect(() => {
    // eslint-disable-next-line no-console
    setLoggedIn(!!Cookies.get('session'));
  });

  let description;
  let header;

  if (loggedIn) {
    header = (
      <h1>
        Buruan
        <br />
        Cek Agendamu
        <br />
        Sekarang!
      </h1>
    );
    description = (
      <p>
        Jangan pernah berhenti belajar,
        <br /> karena hidup tak pernah berhenti mengajari
        <br /> Terus catat agendamu bersama Yuk Bisa Yuk!
      </p>
    );
  } else {
    header = (
      <h1>
        Jadwalkan
        <br />
        Agendamu di
        <br />
        Yuk Bisa Yuk!
      </h1>
    );
    description = (
      <p>
        Yuk Bisa Yuk merupakan sebuah website pengelola agenda
        <br /> yang diharapkan dapat membuat kegiatan sehari-hari
        <br /> menjadi lebih teratur dan terencana. Web ini
        <br /> rencananya dibuat khusus untuk lab B401.
      </p>
    );
  }

  return (
    <>
      <div className={style.content}>
        <div className={style.header}>{header}</div>
        <div className={style.description}>{description}</div>
        <SignInBtn loggedIn={loggedIn} setLoggedIn={setLoggedIn} name={name} setName={setName} />
      </div>
    </>
  );
}

export default Home;
