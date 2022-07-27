import {
  addProductReducer,
  addProductReviewReducer,
  deleteProductReducer,
  getAllProductsReducer,
  getProductByIdReducer,
  updateProductReducer,
} from "./reducers/productReducer";
import { combineReducers } from "redux";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { cartReducer } from "./reducers/cartReducer";
import {
  deleteUserReducer,
  getAllUserReducer,
  loginReducer,
  registerNewUserReducer,
  updateUserReducer,
} from "./reducers/userReducers";
import {
  getAllOrdersReducer,
  getOrderByIdReducer,
  placeOrderReducer,
} from "./reducers/ordersReducers";
import { getOrderReducer } from "./reducers/ordersReducers";

const finalReducer = combineReducers({
  getAllProductsReducer: getAllProductsReducer,
  getProductByIdReducer: getProductByIdReducer,
  cartReducer: cartReducer,
  registerNewUserReducer: registerNewUserReducer,
  loginReducer: loginReducer,
  placeOrderReducer: placeOrderReducer,
  getOrderReducer: getOrderReducer,
  getOrderByIdReducer: getOrderByIdReducer,
  addProductReviewReducer: addProductReviewReducer,
  updateUserReducer: updateUserReducer,
  getAllUserReducer: getAllUserReducer,
  deleteUserReducer: deleteUserReducer,
  deleteProductReducer: deleteProductReducer,
  addProductReducer: addProductReducer,
  updateProductReducer: updateProductReducer,
  getAllOrdersReducer: getAllOrdersReducer,
});

const cartItems = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];

const currentUserToken = localStorage.getItem("currentUserToken")
  ? JSON.parse(localStorage.getItem("currentUserToken"))
  : null;

const currentUserData = localStorage.getItem("currentUserData")
  ? JSON.parse(localStorage.getItem("currentUserData"))
  : null;

const initailState = {
  cartReducer: { cartItems: cartItems },
  loginReducer: {
    currentUserToken: currentUserToken,
    currentUserData: currentUserData,
    // addProductReducer: addProductReducer,
  },
};

const composeEnhancers = composeWithDevTools({
  // Specify here name, actionsBlacklist, actionsCreators and other options
});

const store = createStore(
  finalReducer,
  initailState,
  composeEnhancers(
    applyMiddleware(thunk)
    // other store enhancers if any
  )
);

export default store;
