import React from 'react';
import Table from 'react-bootstrap/table';
import style from './agendafeatures.css';
import 'react-datepicker/dist/react-datepicker.css';
import Agenda from './Agenda';
import Progressbar from './Progressbar';

function Agendafeatures({ agendas, subproject }) {
  return (
    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>Nama Sub-Project</th>
          <th className={style.kolaborasi}>Kolaborasi</th>
          <th className={style.dueDate}>Due date</th>
          <th className={style.status}>Status</th>
          <th className={style.description}>Description</th>
          <th className={style.filesharing}>File Sharing</th>
        </tr>
      </thead>
      <tbody>
        {agendas.map((agenda) => {
          return <Agenda agenda={agenda} />;
        })}
        <tr className={style.progress}>
          <td> Progress </td>
          <td colSpan="5">
            <Progressbar subproject={subproject} />
          </td>
        </tr>
      </tbody>
    </Table>
  );
}

export default Agendafeatures;
