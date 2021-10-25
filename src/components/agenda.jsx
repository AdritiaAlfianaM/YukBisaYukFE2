import React, { useState } from 'react';
// import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
// import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

function Agenda() {
  const [startDate, setStartDate] = useState(new Date());
  const getDatePicker = () => {
    return (
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        timeInputLabel="Time:"
        dateFormat="MM/dd/yyyy h:mm aa"
        showTimeInput
      />
    );
  };

  const Status = () => {
    return (
      <Form.Select>
        <option>Select</option>
        <option value="1">Done</option>
        <option value="2">On Progress</option>
        <option value="3">Stuck</option>
      </Form.Select>
    );
  };

  return (
    <tr>
      <td>Agenda </td>
      <td> Orang </td>
      <td>{getDatePicker()}</td>
      <td>{Status()}</td>
      <td>Mark</td>
      <td>Otto</td>
    </tr>
  );
}

export default Agenda;
