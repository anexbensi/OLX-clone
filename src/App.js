import React, { useEffect, useContext } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Signup from './Pages/Signup'

/**
 * ?  =====Import Components=====
 */
import Home from './Pages/Home';
import LoginPage from './Pages/Login';
import Create from './Pages/Create'
import { AuthContext, FirebaseContext } from './store/Context';
import Post from './store/PostContext';
import View from './Components/View/View';

function App() {

  const { setUser } = useContext(AuthContext)
  const { firebase } = useContext(FirebaseContext)


  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setUser(user)
      console.log("username:  ", user.displayName)
    })
  }, [])

  return (
    <div>
      <Post>
        <Router>
          <Route exact path='/'><Home /></Route>
          <Route exact path='/signup'><Signup /></Route>
          <Route exact path='/login'><LoginPage /></Route>
          <Route exact path='/create'><Create /></Route>
          <Route exact path='/view'><View /></Route>
        </Router>

      </Post>

    </div>
  );
}

export default App;
