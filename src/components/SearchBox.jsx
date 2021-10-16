import React, { useState } from 'react';
import style from './SearchBox.css';

function SearchBox() {
  const [name, setName] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`The name you entered was: ${name}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={name} className={style.searchBox} onChange={(e) => setName(e.target.value)} />
      <input type="submit" />
    </form>
  );
}

export default SearchBox;
