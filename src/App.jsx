import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import './App.css';
import Router from './Router';
import Sidebar from './components/Sidebar';
import LoadingContext from './contexts/LoadingContext';
import Loading from './components/Loading';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [loading, setLoading] = useState(false);

  const value = { loading, setLoading };

  useEffect(() => {
    setLoggedIn(!!Cookies.get('session'));
  });

  return (
    <div className="App">
      <LoadingContext.Provider value={value}>
        <Sidebar loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
        <Router loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
        {loading && <Loading />}
      </LoadingContext.Provider>
    </div>
  );
}

export default App;
