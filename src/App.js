import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom'
import Haeder from './Haeder'
import Home from './Home'
import Lease from './Lease'
import Payment from './Payment'
import Done from './done'
import ReturnCar from './ReturnCar'

function App() {
  return (
    <div className="App">
      <Haeder/>
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/ReturnCar' exact component={ReturnCar}/>
        <Route path='/lease'exact component={Lease}/>
        <Route path='/Payment'  component={Payment} />
        <Route path='/Done'  component={Done} />
      </Switch>
    </div>
  );
}

export default App;