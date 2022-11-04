import { createSlice } from '@reduxjs/toolkit';
import { getAccessToken } from '../../utils/auth';

interface State {
  isLoading: boolean;
  loggedIn: boolean;
  accessToken?: string | null;
  error?: boolean;
  message?: string;
  user?: any;
  loggedOut?: boolean;
  verified?: boolean;
  showOtpScreen?: boolean;
  appVerifier?: any;
  emailVerificationSigninErr?: boolean;
}

const initialState: State = {
  isLoading: false,
  loggedIn: false,
  accessToken: getAccessToken() || null,
  error: false,
  message: '',
  user: {},
  loggedOut: true,
  verified: false,
  emailVerificationSigninErr: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginStart: (state: State, action) => ({
      ...initialState,
      error: false,
      isLoading: true
    }),
    loginSuccess: (state: State, action) => {
      if (action.payload.verified) {
        state.verified = true;
        state.user = action.payload.user
        state.isLoading = false;
      } else {
        state = {
          ...state,
          isLoading: false,
          loggedIn: true,
          error: false,
          user: action.payload.user,
          accessToken: action.payload.user.token
        }
      }
    },
    loginFail: (state: State, action) => ({
      ...state,
      isLoading: false,
      loggedIn: false,
      emailVerificationSigninErr: action.payload.emailVerificationSigninErr,
      error: action.payload.error,
      message: action.payload.msg
    }),
    logoutStart: (state: State) => ({
      ...initialState,
      error: false,
      isLoading: true
    }),
    logoutSuccess: (state: State) => ({
      ...state,
      isLoading: false,
    }),
    getUserStart: (state: State) => ({
      ...state,
      isLoading: false
    }),
    getUserSuccess: (state: State, action) => ({
      ...state,
      isLoading: false,
      loggedIn: true,
      error: false,
      user: action.payload.user,
      accessToken: action.payload.user.token
    }),
    clearUserData: (state: State) => ({
      ...state,
      user: {},
      loggedIn: false,
      loggedOut: true,
      isLoading: false,
      error: false,
      accessToken: null
    }),
    signupStartStart: (state: State, action) => ({
      ...initialState,
      isLoading: true
    }),
    signupStartSuccess: (state: State, action) => ({
      ...initialState,
      isLoading: false,
      user: action.payload.user,
      accessToken: action.payload.user.token,
      error: false
    }),
    signupStartFailure: (state: State, action) => ({
      ...initialState,
      isLoading: false,
      error: true,
      msg: action.payload.msg
    }),
    showVerifyOTPStart: (state: State) => ({
      ...state,
      isLoading: true,
      showOtpScreen: true
    }),
    showVerifyOTPSuccess: (state: State, action) => ({
      ...state,
      isLoading: false,
      showOtpScreen: true,
      appVerifier: action.payload.appVerifier
    }),
    setLoading: (state: State, action) => ({
      ...state,
      isLoading: action.payload.loading
    }),
    setShowOtpScreen: (state: State, action) => ({
      ...state,
      showOtpScreen: action.payload.showOtpScreen
    }),
    sendOTPUsingFirebaseStart: (state: State, action) => ({
      ...state,
      isLoading: true
    }),
    sendOTPUsingFirebaseSuccess: (state: State, action) => ({
      ...state,
      isLoading: false,
      appVerifier: action.payload.appVerifier,
    }),
    sendOTPUsingFirebaseFail: (state:State, action) => ({
      ...state,
      isLoading: false,
      error: action.payload.error,
      msg: action.payload.message
    }),
    setEmailVerified: (state:State, action) => ({
      ...state,
      verified: action.payload.verified 
    }),
    verifyEmailOTPStart: (state:State, action) => ({
      ...state,
      isLoading: true      
    }),
    verifyEmailOTPSuccess: (state:State) => ({
      ...state,
      isLoading: false      
    }),
    verifyEmailOTPFailure: (state:State, action) => ({
      ...state,
      isLoading: false,
      error: true    
    })
  }
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
  showVerifyOTPStart,
  showVerifyOTPSuccess,
  signupStartSuccess,
  signupStartFailure,
  setLoading,
  setShowOtpScreen,
  sendOTPUsingFirebaseFail,
  sendOTPUsingFirebaseStart,
  sendOTPUsingFirebaseSuccess,
  setEmailVerified,
  verifyEmailOTPStart,
  verifyEmailOTPFailure,
  verifyEmailOTPSuccess,
} = userSlice.actions;
export default userSlice.reducer;
