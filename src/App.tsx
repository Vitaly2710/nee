import React from 'react';
import './App.css';
import {useState} from "react";
import {log, selectName} from "./redux/userSlice";
import {useDispatch} from "react-redux";
import { useAppSelector } from "./app/hooks";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Admin from "./pages/admin/admin";
import Users from "./pages/user/users";

function App() {

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
              <Main/>
            </Route>
          </Switch>
        </div>
      </Router>
  );
}
 function Main() {
     const logiin = useAppSelector((state) => state.reducers.login)
     const autentific = useAppSelector((state) => state.reducers.autification)
     const [login,setLogin] = useState('')
     const [password,setPassword] = useState('')
     const dispatch = useDispatch()
     console.log(login,password,logiin,autentific)
    function add() {
        dispatch(log(login))
    }
  return(
      <div>
          <input type={"text"} placeholder={'Введите логин'} className={"login"} value={login} onChange={(e)=> setLogin( e.target.value)}/>
          <input type={"text"} placeholder={'Введите пароль'} className={'password'} value={password} onChange={(e)=>setPassword(e.target.value)}/>
          <button onClick={add}>Press</button>
          <div>
              <label>
                  Добавить нового пользователя
                  <input type={'text'} placeholder={'Логин нового пользователя'}/>
              </label>
          </div>

      </div>
  )
}

export default App;
