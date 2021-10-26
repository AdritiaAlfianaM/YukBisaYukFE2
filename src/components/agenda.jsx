import React, { useState } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Form from 'react-bootstrap/Form';

function Agenda({ agenda }) {
  const [startDate, setStartDate] = useState(agenda.dueDate || new Date());
  const [description, setDescription] = useState(agenda.description);
  const [status, setStatus] = useState(agenda.status);
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

  const handleChange = async (e) => {
    setDescription(e.target.value);
    await axios.patch(
      `http://localhost:3001/agenda/${agenda.id}`,
      { description: e.target.value },
      { withCredentials: true }
    );
  };

  const handleStatusChange = async (e) => {
    setStatus(e.target.value);
    await axios.patch(
      `http://localhost:3001/agenda/${agenda.id}`,
      { status: e.target.value === 'Select' ? '' : e.target.value },
      { withCredentials: true }
    );
  };

  const Status = () => {
    return (
      <Form.Select value={status} onChange={handleStatusChange}>
        <option>Select</option>
        <option value="Done">Done</option>
        <option value="In Progress">In Progress</option>
        <option value="Stuck">Stuck</option>
      </Form.Select>
    );
  };

  const Description = () => {
    return (
      <>
        <Form.Control as="textarea" placeholder={description} rows={1} onChange={handleChange} value={description} />
      </>
    );
  };

  const Inputfile = () => {
    return (
      <>
        <Form.Group controlId="formFileSm" className="mb-3">
          <Form.Control type="file" size="sm" />
        </Form.Group>
      </>
    );
  };

  return (
    <tr>
      <td>{agenda.name}</td>
      <td> Orang </td>
      <td>{getDatePicker()}</td>
      <td>{Status()}</td>
      <td>{Description()}</td>
      <td>{Inputfile()}</td>
    </tr>
  );
}

export default Agenda;
