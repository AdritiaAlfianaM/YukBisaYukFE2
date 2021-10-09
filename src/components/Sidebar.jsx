/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { BiBell, BiExit, BiGridAlt, BiSearchAlt, BiUser } from 'react-icons/bi';
import logo from '../assets/logo.png';
// import Link from '../Nav';
import style from './Sidebar.module.css';

function Sidebar() {
  const handleOnClick = async () => {
    const response = await axios.post('http://localhost:3001/auth/logout', {}, { withCredentials: true });
    console.log(response);
  };

  return (
    <div className={style.sidebar}>
      <div className={style.logo}>
        <img src={logo} alt="Logo B401" />
      </div>
      <nav className={style.navList}>
        <ul>
          <Link to="/worksheet">
            <BiGridAlt />
          </Link>
          <Link to="/notification">
            <BiBell />
          </Link>
          <Link to="/search">
            <BiSearchAlt />
          </Link>
          <BiExit onClick={() => handleOnClick()} />
          <Link to="/account" className={style.account}>
            <BiUser />
          </Link>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
