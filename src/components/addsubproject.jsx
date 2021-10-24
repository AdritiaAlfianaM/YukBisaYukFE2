import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BiPlus } from 'react-icons/bi';
import Swal from 'sweetalert2';
import style from '../work.module.css';
import Nyan from '../assets/nyan-cat.gif';
import Agendabtn from './addagenda';
import EditorBtn from './EditorBtn';

function Subprojectbtn({ projectId }) {
  const [subprojects, setSubprojects] = useState([]);
  // const [subprojectId, setSubprojectId] = useState('');
  const [addSubproject, setAddSubproject] = useState(false);

  useEffect(async () => {
    const res = await axios.get(`http://localhost:3001/subproject?project=${projectId}`, { withCredentials: true });
    setSubprojects(res.data.results);
  }, [addSubproject, projectId]);

  const handleOnClick = async () => {
    if (!projectId) return;
    const result = await Swal.fire({
      title: 'Submit your subproject name',
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
      const res = await axios.post(
        'http://localhost:3001/subproject',
        { name: result.value, project: projectId },
        { withCredentials: true }
      );
      console.log(res);
      Swal.fire({
        title: `${result.value} is saved`,
      });
      setAddSubproject(!addSubproject);
    }
  };

  const toggleAddSubproject = () => {
    handleOnClick();
  };

  const [name, setName] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  // const toggleSubprojectId = (id, prName) => {
  //   if (projectId === id) {
  //     setSubprojectId('');
  //     setSubprojectName('Pilih Subproject');
  //   } else {
  //     setSubprojectId(id);
  //     setSubprojectName(prName);
  //   }
  // };

  return (
    <>
      <div
        onClick={toggleAddSubproject}
        aria-hidden="true"
        onSubmit={handleSubmit}
        value={name}
        onChange={(e) => setName(e.target.value)}
      >
        <div className={style.addsp}>
          <BiPlus className={style.plus} />
          <p>Add SubProject</p>
        </div>
      </div>

      <div className={style.subproject}>
        {subprojects.map((subproject) => {
          return (
            <div className={style.listsubproject}>
              <div className={style.subp}>
                {subproject.name}
                <EditorBtn
                  type="subproject"
                  addSomething={addSubproject}
                  setAddSomething={setAddSubproject}
                  somethingId={subproject.id}
                  title="Subproject"
                />
              </div>
              <Agendabtn subprojectId={subproject.id} />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Subprojectbtn;
