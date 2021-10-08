/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { BiBell, BiExit, BiGridAlt, BiSearchAlt, BiUser } from 'react-icons/bi';
import { BrowserRouter as Router } from 'react-router-dom';
// import Worksheet from '../Worksheet';
// import Search from '../Search';
// import Notification from '../Notification';
// import Home from '../Home';
import logo from '../assets/logo.png';
import style from './Sidebar.module.css';

function Sidebar() {
  return (
    <div className={style.sidebar}>
      <div className={style.logo}>
        <img src={logo} alt="Logo B401" />
      </div>
      <nav className={style.navList}>
        <Router>
          <ul>
            <a href="Worksheet">
              <BiGridAlt />
              {/* <Route path="/Worksheet" component={Worksheet} /> */}
            </a>
            <a href="Notification">
              <BiBell />
              {/* <Route path="/Notification" component={Notification} /> */}
            </a>
            <a href="Search">
              <BiSearchAlt />
              {/* <Route path="/Search" component={Search} /> */}
            </a>
            <a href="LogOut">
              <BiExit />
              {/* <Route path="/LogOut" component={Home} /> */}
            </a>
            <a className={style.account} href="Account">
              <BiUser />
            </a>
          </ul>
        </Router>
      </nav>
    </div>
  );
}

export default Sidebar;
