import "./Login.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import React, { useState } from "react";
// import "./style.css";
import doorSVG from "./images/door.svg";
import cartSVG from "./images/cart.svg";
import { useDispatch } from "react-redux";
import { loginStart } from "../../redux/reduxSlice/user";

const Login = () => {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const [userName, setUserName] = useState("");
  const [passwordValue, setPasswordValue] = useState("");

  const signIn = (e: any) => {
    e.preventDefault();
    console.log("userName", userName, passwordValue);
    // dispatch(loginStart({ emailID_or_phone: userName, password: passwordValue }));
    navigate("/")
  };

  return (
    <>
      <img className="wave" src={require("./images/wave.png")} />
      <div className="container">
        <div className="img">
          <img src={cartSVG} />
        </div>
        <div className="login-content">
          <form className="form">
            <img src={doorSVG} />

            <h2 className="title">Trox Sign-In</h2>
            <div className="input-div one">
              <div className="i">
                <i className="fas fa-user"></i>
              </div>
              <div className="div">
                <input
                  type="text"
                  className="input"
                  placeholder="Username"
                  onInput={(e: any) => {
                    setUserName(e.target.value);
                  }}
                />
              </div>
            </div>
            <div className="input-div pass">
              <div className="i">
                <i className="fas fa-lock"></i>
              </div>
              <div className="div">
                <input
                  type="password"
                  className="input"
                  placeholder="Password"
                  onInput={(e: any) => {
                    setPasswordValue(e.target.value);
                  }}
                />
              </div>
            </div>
            <a href="#">Forgot Password?</a>
            <input
              type="submit"
              className="btn"
              value="Login"
              onClick={signIn}
            />
            <input
              type="button"
              className="btn"
              onClick={() => {
                navigate("/register");
              }}
              value="Register"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
