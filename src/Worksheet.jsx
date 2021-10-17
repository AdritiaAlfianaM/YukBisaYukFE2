import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BiPlus } from 'react-icons/bi';
import Swal from 'sweetalert2';
import style from './work.module.css';
import Nyan from './assets/nyan-cat.gif';

function Worksheet() {
  const [projects, setProjects] = useState([]);
  const [addProject, setAddProject] = useState(false);

  useEffect(async () => {
    const res = await axios.get('http://localhost:3001/project', { withCredentials: true });
    console.log(res);
    setProjects(res.data.results);
  }, [addProject]);

  useEffect(() => {
    document.title = 'Worksheet';
  }, []);

  const handleOnClick = async () => {
    const result = await Swal.fire({
      title: 'Submit your project name',
      width: 600,
      padding: '3em',
      backdrop: `
        rgba(0,0,123,0.4)
        url(${Nyan})
        left top
        no-repeat
        `,
      input: 'text',
      inputAttributes: {
        autocapitalize: 'off',
      },
      showCancelButton: true,
      confirmButtonText: 'Save',
      showLoaderOnConfirm: true,
      allowOutsideClick: () => !Swal.isLoading(),
    });
    if (result.isConfirmed) {
      const res = await axios.post('http://localhost:3001/project', { name: result.value }, { withCredentials: true });
      console.log(res);
      Swal.fire({
        title: `${result.value} is saved`,
      });
      setAddProject(!addProject);
    }
  };

  const toggleAddProject = () => {
    handleOnClick();
  };

  const [name, setName] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className={style.Home}>
      <div className={style.content}>
        <div className={style.bar}>
          <div className={style.header}>
            <h1>Worksheet</h1>
          </div>
          <div
            className={style.addp}
            onClick={toggleAddProject}
            aria-hidden="true"
            onSubmit={handleSubmit}
            value={name}
            onChange={(e) => setName(e.target.value)}
          >
            <BiPlus className={style.plus} />
            <p>Add Project</p>
          </div>
          <div className={style.project}>
            {projects.map((project) => {
              return <div className={style.listproject}>{project.name}</div>;
            })}
          </div>
        </div>
        <div className={style.nextbar}>
          <div className={style.addsp}>
            <BiPlus className={style.plus} />
            <p>Add SubProject</p>
          </div>
          <div className={style.subproject}>
            ini list subproject
            <div className={style.adda}>
              {/* tapi ini jgn diclose dulu siapppp aku di dc se nek km mager ngetik oalah ga ngecek haha ohhh siapp hhahahha */}
              <div className={style.agenda}>ini list agenda</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Worksheet;
