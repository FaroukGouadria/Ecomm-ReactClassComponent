
import './App.css';
import CustomersList from './components/CustomersList';
import ShoppingCart from './components/ShoppingCart';
import NavBar from './components/NavBar';
import {BrowserRouter as Router,Route,Switch} from "react-router-dom"
import { Component } from 'react';
export default class App extends Component{
  render(){
     return (
  <Router>
<NavBar/>
  <Switch>
    <Route path="/customers" exact component={ CustomersList }/>
    <Route path="/cart" exact component={ ShoppingCart }/>
  </Switch>
</Router>
  
  );
  }
}
