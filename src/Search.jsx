import React, { useEffect } from 'react';
import Sidebar from './components/Sidebar';
import style from './work.module.css';

function Search() {
  useEffect(() => {
    document.title = 'Search';
  });

  return (
    <div className={style.Home}>
      <Sidebar />
      <div className={style.content}>
        <div className={style.header}>
          <h1>Search</h1>
        </div>
        {/* KASIH KOTAK SEARCH */}
      </div>
    </div>
  );
}

export default Search;
