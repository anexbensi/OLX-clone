import React, { useState, useContext } from "react";

import Logo from "../../olx-logo.png";
import { FirebaseContext } from "../../store/Context";
import "./Signup.css";
import { useHistory } from "react-router-dom";


export default function Signup() {
  const history = useHistory()
  const [userName,setUserName]= useState('')
  const [password,setPassword]= useState('')
  const [email,setEmail]= useState('')
  const [phoneNumber,setPhoneNumber]= useState('')
  const {firebase} = useContext(FirebaseContext)


  const handleSubmit = (e)=>{
    e.preventDefault()
    console.log(userName,password,email,phoneNumber)
    console.log(firebase)

    firebase.auth().createUserWithEmailAndPassword(email,password).then((result)=>{
      console.log(result)
      result.user.updateProfile({displayName:userName}).then(()=>{
        firebase.firestore().collection('users').add({
          id:result.user.uid,
          username:userName,
          phone:phoneNumber
        }).then(()=>{
          history.push('/login')
        })
      })
    })
  }

  

  return (
    <div>
      <div className="signupParentDiv">
        <div className="center">
          <center>
            <img width="200px" height="200px" src={Logo}></img>
            <form onSubmit={handleSubmit}>
              
              <input
                className="input"
                type="text"
                id="fname"
                name="name"
                value={userName}
                onChange={(e)=>setUserName(e.target.value)}
                placeholder="Name"
              />
              <br />
              <br />
              <input
                className="input"
                type="email"
                id="fname"
                name="email"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                placeholder="Email"
              />
              <br />
              <br />
              <input
                className="input"
                type="number"
                id="lname"
                name="phone"
                value={phoneNumber}
                onChange={(e)=>setPhoneNumber(e.target.value)}
                placeholder="Phone Number"
              />
              <br />
              <br />
              <input
                className="input"
                type="password"
                id="lname"
                name="password"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                placeholder="Password"
              />
              <br />
              <br />
              <button>Signup</button>
            </form>
            <a onClick={()=>history.push('/login')}>Login</a>
          </center>
        </div>
      </div>
    </div>
  );
}
