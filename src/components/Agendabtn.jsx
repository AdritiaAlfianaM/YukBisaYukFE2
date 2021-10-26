import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BiPlus } from 'react-icons/bi';
import Swal from 'sweetalert2';
import style from '../work.module.css';
import Nyan from '../assets/nyan-cat.gif';

function Agendabtn({ subproject, project, setAgendas, addAgenda, setAddAgenda }) {
  useEffect(async () => {
    const res = await axios.get('http://localhost:3001/agenda', { withCredentials: true });
    console.log(res);
    setAgendas(res.data.results);
  }, [addAgenda]);

  const handleOnClick = async () => {
    if (!subproject) return;
    const result = await Swal.fire({
      title: 'Submit your agenda name',
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
        'http://localhost:3001/agenda',
        { name: result.value, subproject, project },
        { withCredentials: true }
      );
      console.log(res);
      Swal.fire({
        title: `${result.value} is saved`,
      });
      setAddAgenda(!addAgenda);
    }
  };

  const toggleAddAgenda = () => {
    handleOnClick();
  };

  const [name, setName] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <div
        onClick={toggleAddAgenda}
        aria-hidden="true"
        onSubmit={handleSubmit}
        value={name}
        onChange={(e) => setName(e.target.value)}
      >
        <div className={style.adda}>
          <BiPlus className={style.plus} />
          <p>Add Agenda</p>
        </div>
      </div>
    </>
  );
}

export default Agendabtn;
