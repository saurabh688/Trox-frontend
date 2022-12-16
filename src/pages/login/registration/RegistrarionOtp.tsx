import { Button, Grid, TextField } from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { verifyEmailOTPStart } from "../../../redux/reduxSlice/user";
import { RootState } from "../../../redux/store";
import "./Registration.css";

const RegistrarionOtp = () => {
  const [otp, setOtp] = useState("");
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user);

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
              dispatch(
                verifyEmailOTPStart({
                  userId: user.register.id,
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
              // dispatch(
              //   verifyEmailOTPStart({
              //     userId: user.register.id,
              //     emailId: user.register.id,
              //   })
              // );
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
