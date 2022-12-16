import snack from "../../components/wrapper/snack";
import { call, takeLatest, put } from "redux-saga/effects";
import {
  checkEmail,
  getCountryCode,
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
          console.log("action.payload", action.payload);
          const result = yield call(signIn, action.payload);

          if (result.ResponseBody.verified) {
            yield put(
              loginSuccess({
                verified: true,
                user: {
                  emailOrPhone: action.payload.user.emailOrPhone,
                  password: action.payload.user.password,
                  phoneNumber: result.ResponseBody.phoneNumber,
                  countryCode: result.ResponseBody.countryCode,
                },
              })
            );
          } else {
            setAccessToken(result.ResponseBody.token);
            setRefreshToken(result.ResponseBody.refreshToken);

            let user: any = getUser(getAccessToken());
            let res = yield call(getCountryCode, { phone: user.phoneNumber });
            user.countryCode = res.ResponseBody.countryCode;
            user.token = result.ResponseBody.token;
            yield put(loginSuccess({ user: user }));
            // yield put(getCartItemsStart());
            // yield put(getWishListItemsStart());
            snack.success("Logged In successfully");
            // history.push('/');
            // if (action.payload.buyNowFlow) {
            //   history.push({
            //     pathname: "/",
            //     state: { buyNowFlow: action.payload.buyNowFlow },
            //   });
            // } else {
            //   history.push('/');
            // }
            yield put(getUserStart());
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
            yield put(verifyEmailOTPSuccess(res));
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

      // eslint-disable-next-line no-lone-blocks
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
            let user: any = getUser(accessToken);
            let res = yield call(getCountryCode, { phone: user.phoneNumber });
            user.countryCode = res.ResponseBody.countryCode;
            user.token = accessToken;
            yield put(getUserSuccess({ user }));
          }
        }
        break;

      default:
        break;
    }
  } catch (err: any) {}
}

export default userSagaWatcher;
