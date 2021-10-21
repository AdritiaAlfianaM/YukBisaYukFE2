/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { BiBell, BiExit, BiGridAlt, BiSearchAlt, BiUser } from 'react-icons/bi';
import logo from '../assets/logo.png';
import style from './Sidebar.module.css';

function Sidebar({ loggedIn, setLoggedIn }) {
  const handleOnClick = async () => {
    const res = await axios.post('http://localhost:3001/auth/logout', {}, { withCredentials: true });
    if (res.status < 400) {
      setLoggedIn(false);
      localStorage.removeItem('name');
    }
  };

  let features;

  if (loggedIn) {
    features = (
      <ul>
        <Link to="/worksheet" className={style.sidebarItem}>
          <BiGridAlt />
          <span className={style.tooltip}>Worksheet</span>
        </Link>
        <Link to="/notification" className={style.sidebarItem}>
          <BiBell />
          <span className={style.tooltip}>Notification</span>
        </Link>
        <Link to="/search" className={style.sidebarItem}>
          <BiSearchAlt />
          <span className={style.tooltip}>Search</span>
        </Link>
        <Link to="/" className={style.sidebarItem} onClick={handleOnClick} aria-hidden="true">
          <BiExit />
          <span className={style.tooltip}>Log-out</span>
        </Link>
        <Link to="/account" className={style.account}>
          <BiUser />
          <span className={style.tooltip}>Account</span>
        </Link>
      </ul>
    );
  } else {
    features = null;
  }

  return (
    <div className={style.sidebar}>
      <div className={style.logo}>
        <Link to="/">
          <img src={logo} alt="Logo B401" />
        </Link>
      </div>
      <nav className={style.navList}>{features}</nav>
    </div>
  );
}

export default Sidebar;
