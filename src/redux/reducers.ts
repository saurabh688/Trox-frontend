import { combineReducers } from '@reduxjs/toolkit';
import userActions from "./reduxSlice/user";
import ProductActions from "./reduxSlice/product";


const rootReducer = combineReducers({
    user: userActions,
    product:ProductActions
});

export default rootReducer;
