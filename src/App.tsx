import React from 'react';
import './App.css';
import {useState} from "react";
import {loginAdmin, loginUser, addUser} from "./redux/userSlice";
import {useDispatch} from "react-redux";
import { useAppSelector } from "./app/hooks";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import { Admin } from './pages/Admin/admin';
import Users from "./pages/user/users";
import Main from './pages/Main/main';

function App() {

    const registration = useAppSelector(state => state.reducers.autification)
  return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Main</Link>
              </li>
              <li>
                <Link to="/admin">Admin</Link>
              </li>
              <li>
                <Link to="/users">Users</Link>
              </li>
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/admin">
              <Admin></Admin>
            </Route>
            <Route path="/users">
              <Users></Users>
            </Route>
            <Route path="/">
              {registration == 'administrator'? <Redirect to ="/admin"/> : <Main/> }
              {registration == 'users'? <Redirect to ="/users"/> : false}
            </Route>
          </Switch>
        </div>
      </Router>
  );
}

export default App;

