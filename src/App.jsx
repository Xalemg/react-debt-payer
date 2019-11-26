import React from 'react';
import './App.css';
import { BrowserRouter, Route , Switch} from "react-router-dom";
import DrawerMenu from './components/DrawerMenu/DrawerMenu';
import home from "./pages/home/home";
import loginPage from "./pages/LogInPage/LogInPage";
import signUpPage from "./pages/signUpPage/signUpPage";
import overViewPage from "./pages/overViewPage/overViewPage";
import { Provider } from 'react-redux';
import store from './redux/store'
import settingsPage from './pages/settingsPage/settingsPage';
import statsPage from './pages/statsPage/statsPage';
import AddDebtPage from './pages/AddDebtPage/AddDebtPage';
import EditDebt from './pages/EditDebtPage/EditDebtPage';
import friendsPage from './pages/friendsPage/friendsPage';

function App() {
  return (
    <Provider store = {store}>
      <div className="App">
        <BrowserRouter>
        <Switch>
          <Route exact path = '/logIn' component ={loginPage}/>
          <Route exact path = '/signUp' component = {signUpPage}/>
          <Route exact path = '/home' component ={overViewPage}/>
          <DrawerMenu/>
        </Switch>
        <Switch>
          <Route exact path = '/overview' component ={overViewPage}/>
          <Route exact path = '/stats' component = {statsPage}/>
          <Route exact path = '/friends' component = {friendsPage}/>
          <Route exact path = '/settings' component = {settingsPage}/>
          <Route exact path = '/debts/addDebt'  component= {AddDebtPage}/>
          <Route path = '/debts/editDebt/:debtId' component= {EditDebt}/>
          <Route exact path = '/' component ={overViewPage}/>
        </Switch>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
