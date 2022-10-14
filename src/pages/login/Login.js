import {
  Grid,
  Paper,
  Avatar,
  TextField,
  FormControlLabel,
  Checkbox,
  Button,
  Typography,
  Link,
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import React, { useState } from "react";
import "./style.css";
import doorSVG from "./images/door.svg";
import cartSVG from "./images/cart.svg";

const Login = () => {
  let navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [passwordValue, setPasswordValue] = useState("");

  // const signIn = () =>{

  //     navigate("/", { replace: true });
  // }

  const signIn = async () => {
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
    // <div className="login">
    //   <Link href="/">
    //     <img
    //       src={require("../../assets/logo/trox.png")}
    //       alt="logo"
    //       className="login__logo"
    //     />
    //   </Link>
    //   <Grid>
    //     <Paper elevation={10} className="paper__style">
    //       <Grid align="Center">
    //         <Avatar id="avatar__style">
    //           <LockOutlinedIcon />
    //         </Avatar>
    //         <h2>Sign In</h2>
    //       </Grid>
    //       <TextField
    //         label="Email or mobile phone number"
    //         placeholder="Email or mobile phone number"
    //         defaultValue={userName}
    //         onChange={(e)=>{
    //             setUserName(e.target.value)
    //         }}
    //         fullWidth
    //         required
    //       />
    //       <TextField
    //         label="Password"
    //         type="password"
    //         defaultValue={passwordValue}
    //         onChange={(e)=>{
    //             setPasswordValue(e.target.value)
    //         }}
    //         placeholder="Enter password"
    //         fullWidth
    //         required
    //       />
    //       <FormControlLabel
    //         control={<Checkbox name="checkedB" color="primary" />}
    //         label="Remember me"
    //       />
    //       <Button
    //         type="submit"
    //         onClick={signIn}
    //         color="primary"
    //         variant="contained"
    //         id="btn__style"
    //         fullWidth
    //       >
    //         Sign In
    //       </Button>
    //       <Typography>
    //         <Link href="#">Forgot Password ?</Link>
    //       </Typography>
    //       <Typography>
    //         {" "}
    //         Do you have an account ?<Link href="#">Sign Up</Link>
    //       </Typography>
    //     </Paper>
    //   </Grid>
    // </div>
    <>
      <img class="wave" src={require("./images/wave.png")} />
      <div class="container">
        <div class="img">
          <img src={cartSVG} />
        </div>
        <div class="login-content">
          <form action="index.html">
            <img src={doorSVG} />

            <h2 class="title">Trox Sign-In</h2>
            <div class="input-div one">
              <div class="i">
                <i class="fas fa-user"></i>
              </div>
              <div class="div">
                <input type="text" class="input" placeholder="Username"/>
              </div>
            </div>
            <div class="input-div pass">
              <div class="i">
                <i class="fas fa-lock"></i>
              </div>
              <div class="div">
                <input type="password" class="input" placeholder="Password"/>
              </div>
            </div>
            <a href="#">Forgot Password?</a>
            <input type="submit" class="btn" value="Login"  onClick={signIn}/>
            <input type="submit" class="btn" value="Register" />
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
