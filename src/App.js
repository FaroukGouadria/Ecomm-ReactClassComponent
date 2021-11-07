
import './App.css';
import CustomersList from './components/CustomersList';
import ShoppingCart from './components/ShoppingCart';
import NavBar from './components/NavBar';
import {BrowserRouter as Router,Route,Switch} from "react-router-dom"
import { Component } from 'react';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import ErrorPAge from './components/ErrorPAge';
import Home from './components/Home';
export default class App extends Component{
  render(){
     return (
  <Router>
<NavBar/>
  <Switch>
    <Route path="/customers" exact component={ CustomersList }/>
    <Route path="/cart" exact component={ ShoppingCart }/>
     <Route path="/login" exact component={ Login }/>
     <Route path="/" exact component={ Home }/>
     <Route path="/dashboard" exact component={ Dashboard }/>
     <Route path="*" exact component={ ErrorPAge }/>
  </Switch>
</Router>
  
  );
  }
}
