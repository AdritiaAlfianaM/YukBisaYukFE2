import React, { useEffect, useState } from 'react';
import style from './work.module.css';
import SearchBox from './components/SearchBox';

function Search() {
  const [projects, setProjects] = useState([]);
  const [subprojects, setSubprojects] = useState([]);

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
            <SearchBox setProjects={setProjects} setSubprojects={setSubprojects} />
          </div>
        </div>
        <div className={style.nextbar}>PROJECT</div>
        {projects.map((project) => {
          return <div className={style.nextbar2}>{project.name}</div>;
        })}
        <div className={style.nextbar}>SUBPROJECT</div>
        {subprojects.map((subproject) => {
          return <div className={style.nextbar2}>{subproject.name}</div>;
        })}
      </div>
    </div>
  );
}

export default Search;
