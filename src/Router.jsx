import { Switch, Route } from 'react-router-dom';
import React from 'react';
import Notification from './Notification';
import Worksheet from './Worksheet';
import Search from './Search';
import Home from './Home';

function Router() {
  return (
    <Switch>
      <Route path="/notification">
        <Notification />
      </Route>
      <Route path="/worksheet">
        <Worksheet />
      </Route>
      <Route path="/search">
        <Search />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  );
}

export default Router;
