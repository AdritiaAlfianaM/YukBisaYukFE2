/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { BiBell, BiExit, BiGridAlt, BiSearchAlt, BiUser } from 'react-icons/bi';
import logo from '../assets/logo.png';
import style from './Sidebar.module.css';

function Sidebar() {
  return (
    <div className={style.sidebar}>
      <div className={style.logo}>
        <img src={logo} alt="Logo B401" />
      </div>
      <nav className={style.navList}>
        <ul>
          <a href="#">
            <BiGridAlt />
          </a>
          <a href="#">
            <BiBell />
          </a>
          <a href="#">
            <BiSearchAlt />
          </a>
          <a href="#">
            <BiExit />
          </a>
          <a className={style.account} href="#">
            <BiUser />
          </a>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
