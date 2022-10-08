import React from 'react';
import { Grid, Paper, Avatar, TextField, FormControlLabel, Checkbox, Button, Typography, Link } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import './Login.css';
import { useNavigate } from "react-router-dom";

const Login = () => {

    let navigate = useNavigate();

    const signIn = () =>{

        navigate("/", { replace: true });


    }

    return (
        <div className="login">
            <Link href="/">
                <img src={require("../../assets/logo/trox.png")} alt="logo" className="login__logo" />
            </Link>
            <Grid>
                <Paper elevation={10} className="paper__style">
                    <Grid align="Center">
                        <Avatar id='avatar__style'>
                            <LockOutlinedIcon/>
                        </Avatar>
                        <h2>Sign In</h2>
                    </Grid>
                    <TextField label="Email or mobile phone number" placeholder="Email or mobile phone number" fullWidth required/>
                    <TextField label="Password" type="password" placeholder="Enter password" fullWidth required/>
                    <FormControlLabel
                        control={
                            <Checkbox
                                name="checkedB"
                                color="primary"
                            />
                        }
                        label="Remember me"
                    />
                    <Button type="submit" onClick={signIn} color="primary" variant="contained" id='btn__style' fullWidth>Sign In</Button>
                    <Typography>
                        <Link href="#">
                            Forgot Password ?
                        </Link>
                    </Typography>
                    <Typography> Do you have an account ?
                        <Link href="#">
                            Sign Up
                        </Link>
                    </Typography>
                </Paper>
            </Grid>
        </div>
    )
}

export default Login;
