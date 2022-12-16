import React from "react";
import Cart from "../pages/cart/Cart";
import Home from "../pages/home/Home";
import Listing from "../pages/lisitng/Listing";
import Login from "../pages/login/Login";
import RegistrarionOtp from "../pages/login/registration/RegistrarionOtp";
import Registration from "../pages/login/registration/Registration";
import Order from "../pages/order/Order";
import ProductDetails from "../pages/productDetails/ProductDetails";
import * as types from "../types";
import ROUTE_PATHS from "./routesPath";
// const Cart = React.lazy(() => import("../pages/cart/Cart"));
// const Home = React.lazy(() => import("../pages/home/Home"));
// const Listing = React.lazy(() => import("../pages/lisitng/Listing"));
// const Login = React.lazy(() => import("../pages/login/Login"));
// const Order = React.lazy(() => import("../pages/order/Order"));
// const ProductDetails = React.lazy(
//   () => import("../pages/productDetails/ProductDetails")
// );
// const RegistrarionOtp = React.lazy(
//   () => import("../pages/login/registration/RegistrarionOtp")
// );
// const Registration = React.lazy(
//   () => import("../pages/login/registration/Registration")
// );

const routes: types.route[] = [
  {
    path: ROUTE_PATHS.LOGIN,
    component: <Login />,
    exact: true,
  },
  {
    path: ROUTE_PATHS.LISTING,
    component: <Listing />,
    exact: true,
  },
  {
    path: ROUTE_PATHS.HOME,
    component: <Home />,
    exact: true,
  },
  {
    path: ROUTE_PATHS.PRODUCT_DETAILS,
    component: <ProductDetails />,
    exact: true,
  },
  {
    path: ROUTE_PATHS.ORDER,
    component: <Order />,
    exact: true,
  },
  {
    path: ROUTE_PATHS.CART,
    component: <Cart />,
    exact: true,
  },
  {
    path: ROUTE_PATHS.REGISTRATION,
    component: <Registration />,
    exact: true,
  },
  {
    path: ROUTE_PATHS.REGISTRATIONOTP,
    component: <RegistrarionOtp />,
    exact: true,
  },
];

export default routes;
