import snack from "../../components/wrapper/snack";
import { call, takeLatest, put } from "redux-saga/effects";
import {
  checkEmail,
  getCountryCode,
  getUserDetails,
  resendEmailVerificationLink,
  signIn,
  signUp,
  verifyEmailOTP,
} from "../services/user";
import {
  getUserStart,
  loginFail,
  loginStart,
  loginSuccess,
  logoutStart,
  getUserSuccess,
  clearUserData,
  signupStartStart,
  signupStartFailure,
  setLoading,
  verifyEmailOTPStart,
  verifyEmailOTPSuccess,
  signupStartSuccess,
  verifyEmailOTPFailure,
  resendEmailOTPStart,
  resendEmailOTPSuccess,
  resendEmailOTPFailure,
  getUserFailure,
} from "../reduxSlice/user";
// import { clearWishListData, getWishListItemsStart } from "redux/wishlist";
import {
  clearAccessToken,
  clearRefreshToken,
  getAccessToken,
  getUser,
  setAccessToken,
  setRefreshToken,
} from "../../utils/auth";
import { isPhoneNumber } from "../../utils/validations";

function* userSagaWatcher() {
  yield takeLatest(
    [
      loginStart.type,
      logoutStart.type,
      getUserStart.type,
      signupStartStart.type,
      verifyEmailOTPStart.type,
      resendEmailOTPStart.type,
    ],
    userWorker
  );
}

function* userWorker(action: any): any {
  try {
    switch (action.type) {
      case loginStart.type:
        {
          const result = yield call(signIn, action.payload);
          console.log("resultresultresult", result);

          if (result.success) {
            setAccessToken(result.data.accessToken);
            setRefreshToken(result.data.refreshToken);
            yield put(
              loginSuccess(result)
            );
          }
          else {
            yield put(loginFail(result));
          }
        }
        break;

      // eslint-disable-next-line no-lone-blocks
      case signupStartStart.type:
        {
          yield put(setLoading({ loading: true }));
          const res = yield call(signUp, action.payload);
          console.log("fadsfds", res);

          yield put(setLoading({ loading: false }));
          if (res.success) {
            yield put(signupStartSuccess({ res }));
          } else {
            yield put(signupStartFailure({ res }));
          }
        }
        break;

      case verifyEmailOTPStart.type:
        {
          yield put(setLoading({ loading: true }));
          const res = yield call(verifyEmailOTP, action.payload);
          yield put(setLoading({ loading: false }));
          if (res.success) {
            console.log('verifyEmailOTPStart',res.data)
            setAccessToken(res.data.accessToken);
            setRefreshToken(res.data.refreshToken);
            const response = yield call(getUserDetails, res.data.accessToken);
            console.log('verifyEmailOTPStartresponse',response)
            yield put(verifyEmailOTPSuccess(response));
          } else {
            yield put(verifyEmailOTPFailure({ res }));
          }
        }
        break;
      case resendEmailOTPStart.type:
        {
          yield put(setLoading({ loading: true }));
          const res = yield call(resendEmailVerificationLink, action.payload);
          yield put(setLoading({ loading: false }));
          if (res.success) {
            yield put(resendEmailOTPSuccess());
          } else {
            yield put(resendEmailOTPFailure({ res }));
          }
        }
        break;
      case logoutStart.type:
        {
          clearAccessToken();
          clearRefreshToken();
          yield put(clearUserData());
          // yield put(clearCartData());
          // yield put(clearWishListData());
          snack.success("Logged out successfully");
        }
        break;

      // eslint-disable-next-line no-lone-blocks
      case getUserStart.type:
        {
          if (getAccessToken()) {
            const accessToken = getAccessToken();
            console.log('accessToken',accessToken)
            const response = yield call(getUserDetails, accessToken);
            console.log('getAccessTokenresresponse',response.data)

            if (response.success) {
              console.log('getAccessTokenres',response)
              yield put(getUserSuccess(response));
            } else {
              yield put(getUserFailure(response));
            }
          }
        }
        break;

      default:
        break;
    }
  } catch (err: any) {}
}

export default userSagaWatcher;
