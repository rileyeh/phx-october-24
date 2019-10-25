import React from 'react';
import './App.css';
import Home from './Components/Home/Home'
import Dash from './Components/Dashboard/Dashboard'
import Login from './Components/Login/Login'
import Register from './Components/Register/Register'
import { Route, Switch } from 'react-router-dom'



function App() {
  return (
    <div className="App">
      <Switch>
        <Route path='/register' component={Register} />
        <Route path='/login'  component={Login} />
        <Route path='/dash'  component={Dash} />
        <Route path='/' exact component={Home} />
      </Switch>
    </div>
  );
}

export default App;
