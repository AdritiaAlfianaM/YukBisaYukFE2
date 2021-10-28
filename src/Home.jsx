import React, { useEffect, useState } from 'react';
import { PlayState, Tween } from 'react-gsap';
import { Power1 } from 'gsap';
import style from './Home.module.css';
import SignInBtn from './components/SignInBtn';

function Home({ loggedIn, setLoggedIn }) {
  const [name, setName] = useState('');
  const [play, setPlay] = useState(PlayState.stop);
  const [hover, setHover] = useState(false);

  useEffect(() => {
    document.title = 'Home';
    setName(localStorage.getItem('name') || '');
  }, []);

  let description;
  let header;

  const togglePlay = (isHover) => {
    if (play === PlayState.stop || play === PlayState.reverse) {
      setPlay(PlayState.play);
    } else {
      setPlay(PlayState.reverse);
    }
    setHover(isHover);
  };

  if (loggedIn) {
    header = (
      <Tween
        to={{
          top: '-20px',
          ease: Power1.easeIn,
          paused: true,
        }}
        duration={0.2}
        playState={play}
      >
        <h1
          className={`${style.h1} ${hover && style.superShadow}`}
          onMouseEnter={() => togglePlay(true)}
          onMouseLeave={() => togglePlay(false)}
        >
          Buruan
          <br />
          Cek Agendamu
          <br />
          Sekarang!
        </h1>
      </Tween>
    );
    description = (
      <p>
        Jangan pernah berhenti belajar,
        <br /> karena hidup tak pernah berhenti mengajari.
        <br /> Terus catat agendamu bersama Yuk Bisa Yuk!
      </p>
    );
  } else {
    header = (
      <Tween
        to={{
          top: '-20px',
          ease: Power1.easeInOut,
          paused: true,
        }}
        duration={0.2}
        playState={play}
      >
        <h1
          className={`${style.h1} ${hover && style.superShadow}`}
          onMouseEnter={() => togglePlay(true)}
          onMouseLeave={() => togglePlay(false)}
        >
          Jadwalkan
          <br />
          Agendamu di
          <br />
          Yuk Bisa Yuk!
        </h1>
      </Tween>
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
