import React from 'react';
import './App.css';
import Router from './Router';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Router />
    </div>
  );
}

export default App;
