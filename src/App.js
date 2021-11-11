
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
  constructor(props){
    super(props);
    this.state={isLoggedIn:false}
  }
  render(){
     return (
  <Router>
<NavBar isLoggedIn={this.state.isLoggedIn}/>
 <div className="container-fluid">
  <Switch>
    <Route path="/customers" exact component={ CustomersList }/>
    <Route path="/cart" exact component={ ShoppingCart }/>
     <Route path="/" exact render={(props)=> (<Login {...props} updateLogginIn={this.updateLogginIn}/>) }/>
     <Route path="/dashboard" exact component={ Dashboard }/>
     <Route path="*" exact component={ ErrorPAge }/>
  </Switch>

</div>
</Router>
  
  );
  }
  updateLogginIn=(status)=>{
    this.setState({
      isLoggedIn:status
    })
    
  }
}
