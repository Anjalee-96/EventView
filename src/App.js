import React, {Component} from 'react';

import {BrowserRouter as Router,Route} from 'react-router-dom'; 





import './App.css';

import Home from './components/Home.c';
import Login from './components/Login.c';
import Register from './components/Register.c';
import Event from './components/Event.c';
import Navbar from './components/Navbar';




class App extends Component{
    

  render(){
     
    return(
     
      <Router>
        <div className="App">
          <Navbar/>
          <Route exact path = '/' component = {Home}/> 
           <div className="container">
          <Route exact path = '/register' component = {Register}/>
          <Route exact path = '/login' component = {Login}/>
          <Route exact path = '/event' component = {Event}/>
          
         
           </div>
        </div>
    </Router>
    

    
    );
  }
}

export default App;