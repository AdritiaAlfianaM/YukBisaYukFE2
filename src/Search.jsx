import React, { useEffect, useState } from 'react';
import style from './work.module.css';
import SearchBox from './components/SearchBox';

function Search() {
  const [projects, setProjects] = useState([]);

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
          <div className={style.SearchBox}>
            <SearchBox setProjects={setProjects} />
          </div>
          <div className={style.nextbar}> hasil </div>
          {projects.map((project) => {
            return <div className={style.nextbar}>{project.name}</div>;
          })}
        </div>
      </div>
    </div>
  );
}

export default Search;
