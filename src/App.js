import React from 'react';
import logo from './assets/logo.svg';
import './App.css';
import DrawerMenu from './components/DrawerMenu/DrawerMenu';
function App() {
  return (
    <div className="App">
        <DrawerMenu/>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        
    </div>
  );
}

export default App;
