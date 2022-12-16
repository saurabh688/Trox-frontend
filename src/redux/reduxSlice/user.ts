import { createSlice } from "@reduxjs/toolkit";
import {
  getAccessToken,
  setAccessToken,
  setRefreshToken,
} from "../../utils/auth";

interface State {
  isLoading: boolean;
  loggedIn: boolean;
  user: any | null;
  validate: any | null;
  error?: boolean;
  message?: string;
  // verified?: boolean;
  // appVerifier?: any;
  // emailVerificationSigninErr?: boolean;
}

const initialState: State = {
  isLoading: false,
  loggedIn: false,
  user: null,
  validate: null,
  error: false,
  message: "",
  // verified: false,
  // emailVerificationSigninErr: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginStart: (state: State, action) => ({
      ...initialState,
      error: false,
      isLoading: true,
    }),
    loginSuccess: (state: State, action) => {
      const data = action.payload.data;
      console.log('action.payload2232',action.payload)
      return{
      ...state,
      isLoading: false,
      loggedIn: true,
      message:action.payload.message,
      error: false,
      user: data,
    }
    
    },
    loginFail: (state: State, action) => ({
      ...state,
      isLoading: false,
      loggedIn: false,
      user:null,
      error: action.payload.error,
      message: action.payload.msg
    }),
    logoutStart: (state: State) => ({
      ...initialState,
      error: false,
      isLoading: true,
    }),
    logoutSuccess: (state: State) => ({
      ...state,
      isLoading: false,
    }),
    getUserStart: (state: State) => ({
      ...state,
      isLoading: false,
    }),
    getUserSuccess: (state: State, action) => {
     const data = action.payload.data;
      console.log('action.payload',action.payload)
      return{
      ...state,
      isLoading: false,
      loggedIn: true,
      message:action.payload.message,
      error: false,
      user: data,
    }},
    getUserFailure: (state: State,action) => {
       return{
       ...state,
       isLoading: false,
       loggedIn: false,
       message:action.payload.message,
       error: true,
       user: null,
     }},
    clearUserData: (state: State) => ({
      ...state,
      // user: {},
      // loggedIn: false,
      // isLoading: false,
      // error: false,
      // accessToken: null
    }),
    signupStartStart: (state: State, action) => ({
      ...initialState,
      isLoading: true,
    }),
    signupStartSuccess: (state: State, action) => {
      console.log("success", action.payload);
      let msg = action.payload.res.message;
      let value = action.payload.res.data;

      return {
        ...initialState,
        isLoading: false,
        validate: value,
        loggedIn:false,
        message: msg,
        error: false,
      };
    },
    signupStartFailure: (state: State, action) => {
      console.log("failure", action.payload.res.data.message);
      let msg = action.payload.res.data.message;
      return {
        ...initialState,
        isLoading: false,
        validate: null,
        error: true,
        message: msg,
      };
    },

    setLoading: (state: State, action) => ({
      ...state,
      isLoading: action.payload.loading,
    }),

    verifyEmailOTPStart: (state: State, action) => ({
      ...state,
      isLoading: true,
    }),
    verifyEmailOTPSuccess: (state: State, action) => {
      console.log('verifyEmailOTPSuccessverifyEmailOTPSuccess',action.payload.data);
      return {
        ...state,
        user: action.payload.data,
        loggedIn: true,
        isLoading: false,
      };
    },
    verifyEmailOTPFailure: (state: State, action) => ({
      ...state,
      isLoading: false,
      error: true,
    }),
    resendEmailOTPStart: (state: State) => ({
      ...state,
      isLoading: true,
    }),
    resendEmailOTPSuccess: (state: State) => {
      return {
        ...state,
        isLoading: false,
      };
    },
    resendEmailOTPFailure: (state: State, action) => ({
      ...state,
      isLoading: false,
      error: true,
    }),
  },
});

export const {
  loginStart,
  loginSuccess,
  loginFail,
  logoutStart,
  logoutSuccess,
  getUserStart,
  getUserSuccess,
  getUserFailure,
  clearUserData,
  signupStartStart,
  signupStartSuccess,
  signupStartFailure,
  setLoading,
  verifyEmailOTPStart,
  verifyEmailOTPFailure,
  verifyEmailOTPSuccess,
  resendEmailOTPStart,
  resendEmailOTPFailure,
  resendEmailOTPSuccess,
} = userSlice.actions;
export default userSlice.reducer;
