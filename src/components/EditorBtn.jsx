import React from 'react';
import axios from 'axios';
import { BiTrash, BiPencil } from 'react-icons/bi';
import Swal from 'sweetalert2';
import style from '../work.module.css';
import Deletealert from '../deletealert';
import Renamealert from '../renamealert';

function EditorBtn({ type, addSomething, setAddSomething, somethingId, title, callback }) {
  const deleteSomething = async (id) => {
    const result = await Swal.fire(Deletealert(title));
    if (result.isConfirmed) {
      await axios.delete(`http://localhost:3001/${type}/${id}`, { withCredentials: true });
      setAddSomething(!addSomething);
      callback?.();
    }
  };

  const renameSomething = async (id) => {
    const result = await Swal.fire(Renamealert(title));
    if (result.isConfirmed) {
      await axios.patch(`http://localhost:3001/${type}/${id}`, { name: result.value }, { withCredentials: true });
      setAddSomething(!addSomething);
      callback?.();
    }
  };

  return (
    <div className={style.editor}>
      <div className={style.delete} onClick={() => deleteSomething(somethingId)} aria-hidden="true">
        <BiTrash />
      </div>
      <div className={style.rename} onClick={() => renameSomething(somethingId)} aria-hidden="true">
        <BiPencil />
      </div>
    </div>
  );
}

export default EditorBtn;
