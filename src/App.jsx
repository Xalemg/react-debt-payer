import React from 'react';
import logo from './assets/logo.svg';
import './App.css';
import { BrowserRouter, Route , Switch} from "react-router-dom";
import DrawerMenu from './components/DrawerMenu/DrawerMenu';
import home from "./components/home/home";

import { Provider } from 'react-redux';
import store from './redux/store'


function App() {
  return (
    <Provider store = {store}>
      <div className="App">
        <DrawerMenu/>
        <img src={logo} className="App-logo" alt="logo" />
        <BrowserRouter>
        <Switch>
          <Route path = '/login' component ={home}/>
          <Route path = '/' component ={home}/>
          <Route path = '/home' component ={home}/>
          <Route path = '/debts'/>
          <Route path = '/debts/:debtId'/>
          <Route path = '/stats'/>
        </Switch>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
