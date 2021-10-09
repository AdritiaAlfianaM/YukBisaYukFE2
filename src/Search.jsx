import React, { useEffect } from 'react';
import style from './work.module.css';

function Search() {
  useEffect(() => {
    document.title = 'Search';
  });

  return (
    <div className={style.Home}>
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
