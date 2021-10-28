import { Switch, Route } from 'react-router-dom';
import React from 'react';
import Notification from './Notification';
import Worksheet from './Worksheet';
import Search from './Search';
import Home from './Home';

function Router({ loggedIn, setLoggedIn }) {
  return (
    <Switch>
      <Route path="/notification">
        <Notification />
      </Route>
      <Route path="/worksheet/:projid">
        <Worksheet />
      </Route>
      <Route path="/worksheet">
        <Worksheet />
      </Route>
      <Route path="/search">
        <Search />
      </Route>
      <Route path="/">
        <Home loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
      </Route>
    </Switch>
  );
}

export default Router;
