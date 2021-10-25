import React from 'react';
import Table from 'react-bootstrap/table';
import style from './agendafeatures.css';
import 'react-datepicker/dist/react-datepicker.css';
import Agenda from './agenda';
import Progressbar from './progressbar';

function Agendafeatures() {
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
        <Agenda />
        <Agenda />
        <Agenda />
        <tr className={style.progress}>
          <td> Progress </td>
          <td colSpan="5">
            <Progressbar />
          </td>
        </tr>
      </tbody>
    </Table>
  );
}

export default Agendafeatures;
