import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Worksheet from './Worksheet';
import Search from './Search';
import Notification from './Notification';
import Home from './Home';

function Link() {
  return (
    <Router>
      <Route path="/Worksheet" component={Worksheet} />
      <Route path="/Search" component={Search} />
      <Route path="/Notification" component={Notification} />
      <Route path="/LogOut" component={Home} />
    </Router>
  );
}

export default Link;
