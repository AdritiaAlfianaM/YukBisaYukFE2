import React, { useEffect, useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import axios from 'axios';
import { BiPlus } from 'react-icons/bi';
import Swal from 'sweetalert2';
import style from '../work.module.css';
import Nyan from '../assets/nyan-cat.gif';
import Agendabtn from './Agendabtn';
import Agendafeatures from './Agendafeatures';
import EditorBtn from './EditorBtn';

function Subprojectbtn({ projectId }) {
  const [subprojects, setSubprojects] = useState([]);
  const [addSubproject, setAddSubproject] = useState(false);

  const [agendas, setAgendas] = useState([]);
  const [addAgenda, setAddAgenda] = useState(false);

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
        <Accordion>
          {subprojects.map((subproject, index) => {
            return (
              <Accordion.Item eventKey={`${index}`}>
                <div className={style.listsubproject}>
                  <Accordion.Header>
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
                  </Accordion.Header>
                  <Accordion.Body>
                    <Agendabtn
                      subproject={subproject.id}
                      project={projectId}
                      agendas={agendas}
                      setAgendas={setAgendas}
                      addAgenda={addAgenda}
                      setAddAgenda={setAddAgenda}
                    />
                    <Agendafeatures agendas={agendas} subproject={subproject} />
                  </Accordion.Body>
                </div>
              </Accordion.Item>
            );
          })}
        </Accordion>
      </div>
    </>
  );
}

export default Subprojectbtn;
