
import './App.css';
import CustomersList from './components/CustomersList';
import ShoppingCart from './components/ShoppingCart';
import NavBar from './components/NavBar';
import {Router,Route,Switch} from "react-router-dom"
import { Component } from 'react';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import ErrorPAge from './components/ErrorPAge';
import history from "./history";
import SideBar from './components/SideBar';
export default class App extends Component{
  constructor(props){
    super(props);
    this.state={isLoggedIn:false}
  }
  render(){
     return (
  <Router history={history}>
<NavBar isLoggedIn={this.state.isLoggedIn} updateLogginIn={this.updateLogginIn}/>
 <div className="container-fluid">
   <div className="row">
      <div className="col-lg-3">
        {this.state.isLoggedIn?(
            <SideBar></SideBar>
        ):(
          ""
          )};
       
      </div>
      <div className="col-lg-9">
          <Switch>
            <Route path="/customers" exact component={ CustomersList }/>
            <Route path="/cart" exact component={ ShoppingCart }/>
            <Route path="/" exact render={(props)=> (<Login {...props} updateLogginIn={this.updateLogginIn}/>) }/>
            <Route path="/dashboard" exact component={ Dashboard }/>
            <Route path="*" exact component={ ErrorPAge }/>
          </Switch>
      </div>
   </div>

</div>
</Router>
  
  );
  }
  updateLogginIn=(status)=>{
    this.setState({
      isLoggedIn:status
    });
  }
}
