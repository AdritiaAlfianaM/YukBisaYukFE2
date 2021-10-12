import React, { useEffect, useState } from 'react';
import { BiPlus } from 'react-icons/bi';
import style from './work.module.css';

function Worksheet() {
  useEffect(() => {
    document.title = 'Worksheet';
  }, []);

  const [addProject, setAddProject] = useState(false);

  const toggleAddProject = () => {
    setAddProject(!addProject);
  };

  return (
    <div className={style.Home}>
      <div className={style.content}>
        <div className={style.bar}>
          <div className={style.header}>
            <h1>Worksheet</h1>
          </div>
          <div className={style.addws} onClick={toggleAddProject} aria-hidden="true">
            <BiPlus className={style.plus} />
            <p>Add Project</p>
            {addProject && <h2>No game no life</h2>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Worksheet;
