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
          console.log('213423423143',response)
          if (response.success) {
            console.log('success',response)
            yield put(searchDataSuccess(response.data ));
          } else {
            console.log('failure',response)

            // yield put(searchDataFailure());
          }
        }
        break;

      // case getProductsStartBasedOnFilters.type:
      //   {
      //     const response: any = yield call(
      //       getFilterBasedProducts,
      //       action.payload
      //     );
      //     yield put(searchDataSuccess({ products: response.ResponseBody }));
      //   }
      //   break;
      
        case getProduct.type:
        {
          console.log(action)
          const response: any = yield call(getProductByID, action.payload.id);
          yield put(getProductSuccess({ product: response.ResponseBody }));
        }
        break;
      case createProductStart.type:
        {
          console.log('productproduct', action.payload)
          const response: any = yield call(createProduct, action.payload);
          yield put(createProductSuccess({ product: response.ResponseBody }));
          // if (response.ResponseBody.verified) {
          //}
        }
        break;
      default:
        break;
    }
  } catch (err: any) {
   console.log(err)
  }
}

export default productSagaWatcher;
