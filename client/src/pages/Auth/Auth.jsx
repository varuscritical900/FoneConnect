import React, { useState } from "react";
import "./auth.css";
import Logo from "../../img/logo.png";
import {useDispatch} from 'react-redux';
// import { signUp } from "../../api/AuthRequests";
import { logIn, signUp } from "../../actions/AuthActions.js";

const Auth = () => {
  const initialState = {
    firstname: "",
    lastname: "",
    username: "",
    password: "",
    confirmpass: "",
  };
  const dispatch = useDispatch();
  const [isSignUp, setIsSignUp] = useState(true)

  const [data, setData] = useState(initialState);

  const [confirmPass, setConfirmPass] = useState(true);

  
 // handle Change in input
 const handleChange = (e) => {
  setData({ ...data, [e.target.name]: e.target.value });
};

const handleSubmit = (e) => {
  e.preventDefault();
  if (isSignUp) {
    data.password === data.confirmpass ? dispatch(signUp(data)) :
    setConfirmPass(false);
  }else{
    dispatch(logIn(data))
  }
};

  // Reset Form
  const resetForm = () => {
    setConfirmPass(true);
    setData(initialState);
  };

  return (
    <div className="Auth">
      {/*Left */}
      <div className="a-left">
        <img src={Logo} alt="" />
        <div className="Webname">
          <h1>FoneConnect</h1>
          <h6>Explore the ideas throughout the world</h6>
        </div>
      </div>

      {/*Right */}
      <div className="a-right">
        <form className="infoForm authForm" onSubmit={handleSubmit}>
          <h3>{isSignUp ? "Sign up" : "Login"}</h3>


          {isSignUp && (<div><input
            type="text"
            placeholder="First Name"
            className="infoInput"
            name="firstname"
            onChange={handleChange}
            value={data.firstname}
          />
            <input
              type="text"
              placeholder="Last Name"
              className="infoInput"
              name="lastname"
              onChange={handleChange}
              value={data.lastname}
            />
          </div>)}
          <div>
            <input
              type="text"
              className="infoInput"
              name="username"
              placeholder="Usernames"
              onChange={handleChange}
              value={data.username}
            />
          </div>

          <div>
            <input
              type="password"
              className="infoInput"
              name="password"
              placeholder="Password"
              onChange={handleChange}
              value={data.password}
            />
            {isSignUp &&
              (<input
                type="password"
                className="infoInput"
                name="confirmpass"
                placeholder="Confirm Password"
                onChange={handleChange}
                value={data.confirmpass}
              />)}
          </div>
          <span
            style={{
              color: "red",
              fontSize: "12px",
              alignSelf: "flex-end",
              marginRight: "5px",
              display: confirmPass ? "none" : "block",
            }}
          >
            *Confirm password is not same
          </span>


          <div>
            <span style={{ fontSize: '12px', cursor: "pointer" }}
              onClick={() => {setIsSignUp((prev) => !prev); resetForm()}}>
              {isSignUp ? "Already have an account. Login!" : "Don't have an account? Sign Up"}

            </span>
          </div>
          <button className="button infoButton" type="submit">
            {isSignUp ? "Signup" : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
};


export default Auth;