import { all, fork } from 'redux-saga/effects';
import productSaga from './productSaga';
import userSaga from './userSaga';


export default function* rootSaga() {
  yield all([
    fork(productSaga),
    fork(userSaga),
  ]);
}
