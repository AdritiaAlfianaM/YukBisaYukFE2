import React from 'react';
import Table from 'react-bootstrap/Table';
import style from './agendafeatures.css';
import 'react-datepicker/dist/react-datepicker.css';
import Agenda from './Agenda';
import Progressbar from './Progressbar';

function Agendafeatures({ agendas, subproject, setAddAgenda, addAgenda, updateAgendas }) {
  return (
    <Table striped bordered hover responsive>
      <thead>
        <tr>
          <th>{subproject.name}</th>
          <th className={style.kolaborasi}>Kolaborasi</th>
          <th className={style.dueDate}>Due date</th>
          <th className={style.status}>Status</th>
          <th className={style.description}>Description</th>
          <th className={style.filesharing}>File Sharing</th>
        </tr>
      </thead>
      <tbody>
        {agendas.map((agenda) => {
          return (
            <Agenda
              agenda={agenda}
              addAgenda={addAgenda}
              setAddAgenda={setAddAgenda}
              updateAgendas={updateAgendas}
              subproject={subproject.id}
            />
          );
        })}
        <tr className={style.progress}>
          <td> Progress </td>
          <td colSpan="6">
            <Progressbar subproject={subproject} />
          </td>
        </tr>
      </tbody>
    </Table>
  );
}

export default Agendafeatures;
