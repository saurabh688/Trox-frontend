import { Button, Grid, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { verifyEmailOTPStart } from "../../../redux/reduxSlice/user";
import { RootState } from "../../../redux/store";
import "./Registration.css";

const RegistrarionOtp = () => {
  let navigate = useNavigate();
  const [otp, setOtp] = useState("");
  const dispatch = useDispatch();
  const userData = useSelector((state: RootState) => state.user);

  useEffect(() => {
    console.log("useruseruser", userData);
    if(userData.loggedIn){
      navigate("/")
    }
  }, [userData]);

  return (
    <div className="registraion-container">
      <div className="registraion-layout">
        <h3> Verify your account</h3>
        <p>To verify, we've sent a One Time Password (OTP)</p>
        <Grid xs={12} md={12}>
          <TextField
            id="registration-OTP"
            type="number"
            label="OTP"
            value={otp}
            onChange={(e: any) => {
              setOtp(e.target.value);
            }}
            placeholder="Enter OTP"
            style={{ width: "100%" }}
            variant="outlined"
          />
        </Grid>{" "}
        <br />
        <br />
        <Grid item xs={12} md={12}>
          <Button
            variant="contained"
            style={{ width: "100%" }}
            onClick={() => {
              console.log("useruser", userData);
              dispatch(
                verifyEmailOTPStart({
                  userId: userData.user.id,
                  otp: otp,
                })
              );
            }}
          >
            Verify
          </Button>
        </Grid>
        <br />
        <br />
        <Grid item xs={12} md={12}>
          <Button
            variant="text"
            style={{ width: "100%" }}
            onClick={() => {
              dispatch(
                verifyEmailOTPStart({
                  userId: userData.user.id,
                  emailId: userData.user.emailId,
                })
              );
            }}
          >
            Resend OTP
          </Button>
        </Grid>
      </div>
    </div>
  );
};

export default RegistrarionOtp;
