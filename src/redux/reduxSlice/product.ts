import { createSlice } from "@reduxjs/toolkit";
import { BuyableProduct } from "../../types";

interface State {
  isLoading: boolean;
  error: boolean;
  products: BuyableProduct[];
  product: {};
}

const initialState: State = {
  isLoading: true,
  error: false,
  products: [],
  product: {},
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    searchDataStart: (state: State, action) => ({
      ...initialState,
      isLoading: true,
    }),
    searchDataSuccess: (state: State, action) => {
      return({
      ...state,
      isLoading: false,
      products: action.payload.products,
    })},
    searchDataFailure: (state: State) => ({
      ...state,
      error: true,
      isLoading: false,
    }),
    getProductsStartBasedOnFilters: (state: State, action) => ({
      ...initialState,
      isLoading: true,
    }),
    getProduct: (state: State, action) => ({
      ...initialState,
      isLoading: true,
    }),
    getProductSuccess: (state: State, action) => ({
      ...initialState,
      isLoading: false,
      product: action.payload.product,
    }),
    getProductFailure: (state: State, action) => ({
      ...initialState,
      isLoading: true,
      product: action.payload.product,
    }),
    createProductStart: (state: State, action) => ({
      ...initialState,
      isLoading: true,
      error: false,
    }),
    createProductSuccess: (state: State, action) => ({
      ...state,
      product: action.payload.product,
      isLoading: false,
      error: false,
    }),
    createProductFailure: (state: State, action) => ({
      ...state,
      isLoading: false,
      error: true,
    }),
  },
});

export const {
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
} = productSlice.actions;
export default productSlice.reducer;
