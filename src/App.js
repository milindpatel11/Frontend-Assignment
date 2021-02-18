import './App.css';
import Login1 from './pages/Login1'
import Login2 from './pages/Login2'
import Console from './pages/Console'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {useState} from 'react';


function App() {


  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
              <Login1 />
          </Route>
          <Route exact path={"/login"}>
              <Login2 />
          </Route>
          <Route exact path={"/console"}>
              <Console />
          </Route>

        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
