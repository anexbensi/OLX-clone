import React,{useEffect, useContext} from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Signup from './Pages/Signup'

/**
 * ?  =====Import Components=====
 */
import Home from './Pages/Home';
import LoginPage from './Pages/Login';
import { AuthContext, FirebaseContext } from './store/Context';

function App() {

const {setUser} = useContext(AuthContext)
const {firebase} = useContext(FirebaseContext)
 

useEffect(()=>{
  firebase.auth().onAuthStateChanged((user)=>{
    setUser(user)
    console.log("username:  ",user.displayName)
  })
},[])

  return (
    <div>
      <Router>
          <Route exact path='/'><Home /></Route>
          <Route exact path='/signup'><Signup/></Route>
          <Route exact path='/login'><LoginPage/></Route>
      </Router>
      
    </div>
  );
}

export default App;
