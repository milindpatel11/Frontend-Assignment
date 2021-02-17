import './App.css';
import Login1 from './pages/Login1'
import Login2 from './pages/Login2'
import Console from './pages/Console'

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {useState} from 'react';


function App() {

  const [endpoint, setEndPoint] = useState("")

  const changeEndPoint = (input) => {
    setEndPoint(input)
  }

  console.log(`APP endpoint ${endpoint}`);

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
              <Login1 changeEndPoint={changeEndPoint} endpoint={endpoint}/>
          </Route>
          <Route exact path={`/${endpoint}.esper.cloud/login`}>
              <Login2 endpoint={endpoint}/>
          </Route>
          <Route exact path={`/${endpoint}.esper.cloud/console`}>
              <Console endpoint={endpoint}/>
          </Route>

        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
