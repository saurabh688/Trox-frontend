import { call, put, takeLatest } from "redux-saga/effects";
import {
  searchDataStart,
  searchDataSuccess,
  searchDataFailure,
  getProductsStartBasedOnFilters,
  getProduct,
  getProductSuccess,
  getProductFailure,
  createProductStart,
  createProductSuccess,
  createProductFailure,
} from "../reduxSlice/product";
import {
  getFilterBasedProducts,
  getProducts,
  getProductByID,
  createProduct,
} from "../services/product";

function* productSagaWatcher() {
  yield takeLatest(
    [
      searchDataStart.type,
      getProduct.type,
      getProductsStartBasedOnFilters.type,
      createProductStart.type,
    ],
    productWorker
  );
}

function* productWorker(action: any): any {
  try {
    switch (action.type) {
      case searchDataStart.type:
        {
          const response: any = yield call(getProducts, action.payload);
          yield put(searchDataSuccess({ products: response.data }));
        }
        break;

      case getProductsStartBasedOnFilters.type:
        {
          const response: any = yield call(
            getFilterBasedProducts,
            action.payload
          );
          yield put(searchDataSuccess({ products: response.ResponseBody }));
        }
        break;
      case getProduct.type:
        {
          console.log(action)
          const response: any = yield call(getProductByID, action.payload.id);
          yield put(getProductSuccess({ product: response.ResponseBody }));
        }
        break;
      case createProductStart.type:
        {
          const { product, history } = action.payload;
          console.log('productproduct',product)
          const response: any = yield call(createProduct, product);
          yield put(createProductSuccess({ product: response.ResponseBody }));
          // if (response.ResponseBody.verified) {
          //}
        }
        break;
      default:
        break;
    }
  } catch (err: any) {
    console.error(`Error occuring while calling an action ${action.type}`, err);

    if (action.type === searchDataStart.type) {
      yield put(searchDataFailure);
    } else if (action.type === createProductStart.type) {
      // yield put(createProductFailure({ msg: err?.response.data.message }));
    }
  }
}

export default productSagaWatcher;
