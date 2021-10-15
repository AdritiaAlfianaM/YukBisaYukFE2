import React, { useState } from 'react';
import './App.css';
import Router from './Router';
import Sidebar from './components/Sidebar';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div className="App">
      <Sidebar loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
      <Router loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
    </div>
  );
}

export default App;
