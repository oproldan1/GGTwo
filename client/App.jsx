/* eslint-disable react/jsx-filename-extension */
/**
  * @desc Renders our main app, Handles routes in app
*/

import React, {useContext} from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './components/login/Login.jsx';
import Dashboard from './components/games/Dashboard.jsx';
import UserPage from './components/user/userPage.jsx';

export default function App() {

  // const theme = useContext(ThemeContext)
  
  return (
    <div>
      <Switch>
        <Route exact path="/dashboard" component={Dashboard} />
        <Route path='/user/:id'>
          <UserPage />
        </Route>
        <Route path="/">
          <Login />
        </Route>
      </Switch>
    </div>
  );
}
