import React, { useState } from 'react';
import axios from 'axios';
import style from './SearchBox.css';

function SearchBox({ setProjects }) {
  const [name, setName] = useState(''); // getProject

  const handleSubmit = async (event) => {
    event.preventDefault();
    // alert(`The name you entered was: ${name}`);
    const res = await axios.get(`http://localhost:3001/project?name=${name}`, {
      withCredentials: true,
    });
    setProjects(res.data.results);
    console.log(res.data.results);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={name} className={style.searchBox} onChange={(e) => setName(e.target.value)} />
      <input type="submit" />
    </form>
  );
}

export default SearchBox;
