import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from './Login';
import SignIn from './SignUp';
import SignUp from './SignIn';
import Home from './Home';
import Details from './Details';
import Kick from './Kick';


function App() {
  return (
    <div className="App">
     
     <BrowserRouter>
     <Switch>
     <Route path="/" exact component={Login}/>
      <Route path="/signUp" exact component={SignIn}/>
      <Route path='/SignIn' exact component={SignUp}/>
      <Route path='/Home' exact component={Home}/>
      <Route path='/Details' exact component={Details}/>
      <Route path='/Details1' exact component={Kick}/>
      
      
      
      </Switch>
    </BrowserRouter>


    </div>
  );
}

export default App;
