import "./Login.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import React, { useState } from "react";
// import "./style.css";
import doorSVG from "./images/door.svg";
import cartSVG from "./images/cart.svg";

const Login = () => {
  let navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [passwordValue, setPasswordValue] = useState("");

  const signIn = (e: any) => {
    e.preventDefault();

    console.log("dfsadfsa");
    navigate("/", { replace: true });
    // let uri = "https://52.54.44.196/api/v1/signIn";
    // try {
    //   const res = await axios.post(uri, {
    //     emailID: userName,
    //     password: passwordValue,
    //   });
    //   console.log("rerewrew", res);
    //   return res.data;
    // } catch (e) {
    //   throw e;
    // }
  };

  return (
    <>
      <img className="wave" src={require("./images/wave.png")} />
      <div className="container">
        <div className="img">
          <img src={cartSVG} />
        </div>
        <div className="login-content">
          <form className="form" action="index.html">
            <img src={doorSVG} />

            <h2 className="title">Trox Sign-In</h2>
            <div className="input-div one">
              <div className="i">
                <i className="fas fa-user"></i>
              </div>
              <div className="div">
                <input type="text" className="input" placeholder="Username" />
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
            <input type="submit" className="btn" value="Register" />
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
