import React from 'react';
import logo from './assets/logo.svg';
import './App.css';
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import DrawerMenu from './components/DrawerMenu/DrawerMenu';
function App() {
  return (
    <div className="App">
        <DrawerMenu/>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <BrowserRouter>
        <Route path = '/home'/>
        <Route path = '/debts'/>
        <Route path = '/debts/:debtId'/>
        <Route path = '/stats'/>
        </BrowserRouter>
        
    </div>
  );
}

export default App;
