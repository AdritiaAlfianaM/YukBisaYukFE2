import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BiPlus } from 'react-icons/bi';
import Swal from 'sweetalert2';
import { useParams } from 'react-router-dom';
import style from './work.module.css';
import Nyan from './assets/nyan-cat.gif';
import Subprojectbtn from './components/Subprojectbtn';

import EditorBtn from './components/EditorBtn';

function Worksheet() {
  const { projid } = useParams();
  const [projects, setProjects] = useState([]);
  const [projectId, setProjectId] = useState(projid || '');
  const [projectName, setProjectName] = useState('Pilih Project');
  const [addProject, setAddProject] = useState(false);
  const [activeProject, setActiveProject] = useState(-1);

  useEffect(async () => {
    const res = await axios.get('http://localhost:3001/project', { withCredentials: true });
    console.log(res);
    setProjects(res.data.results);
    if (projid && res.data?.results) {
      for (let i = 0; i < res.data.results.length; i += 1) {
        if (res.data.results[i].id === projid) {
          setProjectName(res.data.results[i].name);
          break;
        }
      }
    }
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

  const toggleProjectId = (id, prName, i) => {
    if (projectId === id) {
      setProjectId('');
      setProjectName('Pilih Project');
      setActiveProject(-1);
    } else {
      setProjectId(id);
      setProjectName(prName);
      setActiveProject(i);
    }
  };

  const activeProjectStyle = {
    backgroundColor: 'rgba(102, 0, 0, 0.11)',
    color: '#fff',
    borderRadius: '0px',
    borderColor: 'rgb(255, 255, 255)',
    borderStyle: 'double solid solid double',
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
            {projects.map((project, i) => {
              return (
                <div
                  className={style.listproject}
                  onClick={() => toggleProjectId(project.id, project.name, i)}
                  aria-hidden="true"
                  style={activeProject === i ? activeProjectStyle : null}
                >
                  <div className={style.container}>
                    {project.name}
                    <EditorBtn
                      type="project"
                      addSomething={addProject}
                      setAddSomething={setAddProject}
                      somethingId={project.id}
                      title="Project"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className={style.nextbar}>
          <div className={style.proname}>
            <h1>{projectName}</h1>
          </div>
          {projectId && <Subprojectbtn projectId={projectId} />}
        </div>
      </div>
    </div>
  );
}

// A confirm dialog, with a function attached to the "Confirm"-button... button popup buat delete

export default Worksheet;
