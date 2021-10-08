/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { BiBell, BiExit, BiGridAlt, BiSearchAlt, BiUser } from 'react-icons/bi';
import logo from '../assets/logo.png';
// import Link from '../Nav';
import style from './Sidebar.module.css';

function Sidebar() {
  // const handleOnClick = async () => {
  //   const a = await Link();
  //   // eslint-disable-next-line no-console
  //   console.log(a);
  // };

  return (
    <div className={style.sidebar}>
      <div className={style.logo}>
        <img src={logo} alt="Logo B401" />
      </div>
      <nav className={style.navList}>
        <ul>
          <a href="Worksheet">
            <BiGridAlt />
          </a>
          <a href="Notification">
            <BiBell />
          </a>
          <a href="Search">
            <BiSearchAlt />
          </a>
          <a href="LogOut">
            <BiExit />
          </a>
          <a className={style.account}>
            <BiUser />
          </a>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
