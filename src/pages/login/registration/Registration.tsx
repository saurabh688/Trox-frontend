import { Button, Checkbox, Grid, TextField } from "@mui/material";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signupStartStart } from "../../../redux/reduxSlice/user";
import { RootState } from "../../../redux/store";
import "./Registration.css";

const Registration = () => {
  let navigate = useNavigate();
  const [fullName, setFullName] = useState("");
  // const [phoneNumber, setPhoneNumber] = useState("");
  const [emailID, setEmailID] = useState("");
  const [password, setPassword] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [isnavigate, setIsnavigate] = useState(false);
  const dispatch = useDispatch();
  const userData = useSelector((state: RootState) => state.user);

  const submit = (event: any) => {
    event.preventDefault();
    setIsnavigate(true);
    dispatch(
      signupStartStart({
        fullName: fullName,
        emailID_or_phone: emailID,
        password: password,
      })
    );
  };

  useEffect(() => {
    console.log("user", userData);
    if (isnavigate) {
      console.log(userData.validate);
      if (userData.validate == null) {
        if (!!userData.message) alert(userData.message);
      } else {
        if (userData.validate) { 
          navigate("/verification");
          
        }
      }
    }
  }, [userData]);
  return (
    <div className="registraion-container">
      <div className="registraion-layout">
        <form className="form" onSubmit={submit}>
          <h3> Registration </h3>
          <Grid item xs={12} md={12}>
            <TextField
              id="registration-name"
              value={fullName}
              onInput={(e: any) => {
                setFullName(e.target.value);
              }}
              type="text"
              label="Name"
              placeholder="First name and last name"
              variant="standard"
            />
          </Grid>
          <br />
          <br />
          <Grid item xs={12} md={12}>
            <TextField
              id="registration-email"
              value={emailID}
              onInput={(e: any) => {
                setEmailID(e.target.value);
              }}
              label="Email"
              type="email"
              placeholder="Enter email"
              variant="standard"
            />
          </Grid>
          <br />
          <br />
          {/* <Grid item xs={12} md={12}>
          <TextField
            id="registration-mobile"
            value={phoneNumber}
            onInput={(e: any) => {
              setPhoneNumber(e.target.value);
            }}
            label="Mobile number"
            type="number"
            placeholder="Enter mobile number"
            variant="standard"
          />
        </Grid>
        <br />
        <br /> */}
          <Grid item xs={12} md={12}>
            <TextField
              id="registration-password"
              value={password}
              onInput={(e: any) => {
                setPassword(e.target.value);
              }}
              label="Password"
              type={isChecked ? "text" : "password"}
              placeholder="Enter Password"
              variant="standard"
            />
            <div style={{ textAlign: "left",paddingLeft:"28px" }}>
              Show Password:
              <Checkbox
              size="small"
                checked={isChecked}
                onClick={() => {
                  setIsChecked(!isChecked);
                }}
              />
            </div>
          </Grid>
          <br />
          <br />
          <Grid item xs={12} md={12}>
            <Button type="submit" variant="contained" style={{ width: "100%" }}>
              Continue
            </Button>
          </Grid>
          <br />
          <br />
        </form>
      </div>
    </div>
  );
};

export default Registration;
