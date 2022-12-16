import { createSlice } from "@reduxjs/toolkit";
import { getAccessToken } from "../../utils/auth";

interface State {
  isLoading: boolean;
  loggedIn: boolean;
  register: any | null;
  error?: boolean;
  message?: string;
  accessToken?: string | null;
  user?: any;
  loggedOut?: boolean;
  // verified?: boolean;
  // appVerifier?: any;
  // emailVerificationSigninErr?: boolean;
}

const initialState: State = {
  isLoading: false,
  loggedIn: false,
  register: null,
  accessToken: getAccessToken() || null,
  error: false,
  message: "",
  user: {},
  loggedOut: true,
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
      // if (action.payload.verified) {
      //   state.verified = true;
      //   state.user = action.payload.user
      //   state.isLoading = false;
      // } else {
      //   state = {
      //     ...state,
      //     isLoading: false,
      //     loggedIn: true,
      //     error: false,
      //     user: action.payload.user,
      //     accessToken: action.payload.user.token
      //   }
      // }
    },
    loginFail: (state: State, action) => ({
      ...state,
      // isLoading: false,
      // loggedIn: false,
      // emailVerificationSigninErr: action.payload.emailVerificationSigninErr,
      // error: action.payload.error,
      // message: action.payload.msg
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
    getUserSuccess: (state: State, action) => ({
      ...state,
      // isLoading: false,
      // loggedIn: true,
      // error: false,
      // user: action.payload.user,
      // accessToken: action.payload.user.token
    }),
    clearUserData: (state: State) => ({
      ...state,
      // user: {},
      // loggedIn: false,
      // loggedOut: true,
      // isLoading: false,
      // error: false,
      // accessToken: null
    }),
    signupStartStart: (state: State, action) => ({
      ...initialState,
      isLoading: true,
    }),
    signupStartSuccess: (state: State, action) => {
      console.log('success',action.payload)
      let msg = action.payload.res.message;
      let value = action.payload.res.data;

      return{
      ...initialState,
      isLoading: false,
      register: value,
      message: msg,
      error: false,
    }},
    signupStartFailure: (state: State, action) => {
      console.log('failure',action.payload.res.data.message)
      let msg = action.payload.res.data.message;
      return{
      ...initialState,
      isLoading: false,
      register: null,
      error: true,
      message: msg,
    }},

    setLoading: (state: State, action) => ({
      ...state,
      isLoading: action.payload.loading,
    }),
  
    verifyEmailOTPStart: (state: State, action) => ({
      ...state,
      isLoading: true
    }),
    verifyEmailOTPSuccess: (state: State) => ({
      ...state,
      isLoading: false
    }),
    verifyEmailOTPFailure: (state: State, action) => ({
      ...state,
      isLoading: false,
      error: true
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
  clearUserData,
  signupStartStart,
  signupStartSuccess,
  signupStartFailure,
  setLoading,
  verifyEmailOTPStart,
  verifyEmailOTPFailure,
  verifyEmailOTPSuccess,
} = userSlice.actions;
export default userSlice.reducer;
