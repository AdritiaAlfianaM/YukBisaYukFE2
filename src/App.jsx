import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import './App.css';
import Router from './Router';
import Sidebar from './components/Sidebar';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    setLoggedIn(!!Cookies.get('session'));
  });

  return (
    <div className="App">
      <Sidebar loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
      <Router loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
    </div>
  );
}

export default App;
