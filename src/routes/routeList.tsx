import Cart from "../pages/cart/Cart";
import Home from "../pages/home/Home";
import Listing from "../pages/lisitng/Listing";
import Login from "../pages/login/Login";
import ProductDetails from "../pages/productDetails/ProductDetails";
import { route } from "../types";
import ROUTE_PATHS from "./routesPath";


const routes: route[] = [
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
    path: ROUTE_PATHS.CART,
    component: <Cart />,
    exact: true,
  },
];

export default routes;
