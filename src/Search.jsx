import React, { useEffect } from 'react';
import style from './work.module.css';

function Search() {
  useEffect(() => {
    document.title = 'Search';
  }, []);

  return (
    <div className={style.Home}>
      <div className={style.content}>
        <div className={style.bar}>
          <div className={style.header}>
            <h1>Search</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Search;
