// import axios                 from '../../api/axiosController';
import axios from 'axios';
import { IUser, SignInUser } from '../../types';
let baseURL = process.env.REACT_APP_BACKEND_HOST
const signUp = async (signupData : IUser) => {
  let uri = baseURL+'/signup';
  try {
    const res = await axios.post(uri, signupData);
    console.log('11111',res.data)
    return res.data;
  } catch (e:any){
    console.log('resdsfsd',e.response)
    return e.response;
  }
};

const registerAffiliate = async (signupData : IUser) => {
  let uri = 'user/affiliate/register';

  try {
    const res = await axios.post(uri, signupData);
    return res.data;

  } catch (e){
    throw e;
  }
}

const signUpSeller = async (signupData : IUser) => {
  let uri = '/signup';
  try {
    const res = await axios.post(uri, signupData);
    return res.data;
  } catch (e){
    throw e;
  }
};

export const signIn = async (signupData : SignInUser) => {
  console.log('signupData',signupData)
  let uri = baseURL+'/signIn';
  try {
    const res = await axios.post(uri, signupData);
    return res.data;
  } catch (e){
    throw e;
  }
};

const affiliateLogin = async (signinData : SignInUser) => {
  let uri = 'user/affiliate/login';
  try {
    const res = await axios.post(uri, signinData);
    return res.data;
  } catch (e){
    throw e;
  }
};

const checkEmail = async (data: object) => {
  let uri = 'user/check-email';
  try {
    const res = await axios.post(uri, data);
    return res.data;
  } catch (e){
    throw e;
  }
};

const tokenVerification = async (token: object) => {
  let uri = 'user/verify-token';
  try {
    const res = await axios.post(uri, token);
    return res.data;
  } catch (e){
    throw e;
  }
}

const resendEmailVerificationLink = async (data: object) => {
  let uri = baseURL+'/resendOTP';
  try {
    const res = await axios.post(uri, data);
    return res.data;
  } catch (e){
    throw e;
  }
}

const sendResetPasswordLink = async (data: object) => {
  let uri = 'user/send-reset-password-link';
  try {
    const res = await axios.post(uri, data);
    return res.data;
  } catch (e) {
    throw e;
  }
}

const getCountryCode = async (data: object) => {
  let uri = 'user/get-country-code';
  try {
    const res = await axios.post(uri, data);
    return res.data;
  } catch (e) {
    throw e;
  }
}

const passwordUpdate = async (data: object) => {
  let uri = 'user/update-password';
  try {
    const res = await axios.post(uri, data);
    return res.data;
  } catch (e) {
    throw e;
  }
}

const subscribeNewLetter = async (data: any) => {
  let uri = 'user/subscribe';
  try {
    const res = await axios.post(uri, {email : data.email});
    return res.data;
  } catch (e) {
    throw e;
  }
}

const verifyEmailOTP = async (data:any) => {
  let uri = baseURL+'user/verify';
  try {
    const res = await axios.post(uri, data);
    console.log('verifyEmailOTP',res.data)

    return res.data;
  } catch (e:any){
    console.log('verifyEmailOTPfail',e.response)
    return e.response;
  }
}
const getUserDetails = async (accessToken:any) => {
  var config = {
    method: 'get',
    url: baseURL+'/user/detail',
    headers: { 
      'authorization': accessToken
    }
  };
  try {
    console.log('accacacacaca',accessToken)
    const res = await axios(config);
    console.log('getUserDetails111',res.data)

    return res.data;
  } catch (e:any){
    console.log('getUserDetails222',e.response)
    return e.response;
  }
}



export {
  signUp,
  signUpSeller,
  checkEmail,
  tokenVerification,
  resendEmailVerificationLink,
  sendResetPasswordLink,
  getCountryCode,
  passwordUpdate,
  registerAffiliate,
  getUserDetails,
  affiliateLogin,
  subscribeNewLetter,
  verifyEmailOTP
};
