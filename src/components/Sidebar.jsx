/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { BiBell, BiExit, BiGridAlt, BiSearchAlt, BiUser } from 'react-icons/bi';
import logo from '../assets/logo.png';
import style from './Sidebar.module.css';

function Sidebar({ setLoggedIn }) {
  const handleOnClick = async () => {
    const res = await axios.post('http://localhost:3001/auth/logout', {}, { withCredentials: true });
    if (res.status < 400) {
      setLoggedIn(false);
    }
  };

  return (
    <div className={style.sidebar}>
      <div className={style.logo}>
        <Link to="/">
          <img src={logo} alt="Logo B401" />
        </Link>
      </div>
      <nav className={style.navList}>
        <ul>
          <Link to="/worksheet" className={style.sidebarItem}>
            <BiGridAlt />
          </Link>
          <Link to="/notification" className={style.sidebarItem}>
            <BiBell />
          </Link>
          <Link to="/search" className={style.sidebarItem}>
            <BiSearchAlt />
          </Link>
          <Link to="/" className={style.sidebarItem} onClick={handleOnClick} aria-hidden="true">
            <BiExit />
          </Link>
          <Link to="/account" className={style.account}>
            <BiUser />
          </Link>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
