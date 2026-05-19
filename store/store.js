import { createStore, combineReducers, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

// Import Reducers
import {
    userLoginReducer,
    userRegisterReducer,
    userSendOTPReducer,
    userVerifyOTPReducer,
    userForgotPasswordReducer,
    userResetPasswordReducer,
    userDetailsReducer,
    userUpdateProfileReducer
} from './reducers/userReducers';
import {
    productListReducer,
    productDetailsReducer,
    productDeleteReducer,
    productCreateReducer,
    productUpdateReducer,
    allProductsCacheReducer,
} from './reducers/productReducers';
import { productReviewCreateReducer, productReviewUpdateReducer, productReviewDeleteReducer } from './reducers/productReviewReducer';
import {
    categoryListReducer,
    categoryCreateReducer,
    categoryUpdateReducer,
    categoryDeleteReducer
} from './reducers/categoryReducers';
import { orderCreateReducer, orderDetailsReducer, orderListMyReducer } from './reducers/orderReducers';
import { cartReducer } from './reducers/cartReducers';
import { analyticsReducer } from './reducers/analyticsReducers';
import { chatListReducer, chatDetailsReducer, chatSendMessageReducer, chatMarkReadReducer } from './reducers/chatReducers';

const reducer = combineReducers({
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    userSendOTP: userSendOTPReducer,
    userVerifyOTP: userVerifyOTPReducer,
    userForgotPassword: userForgotPasswordReducer,
    userResetPassword: userResetPasswordReducer,
    productList: productListReducer,
    productDetails: productDetailsReducer,
    productDelete: productDeleteReducer,
    productCreate: productCreateReducer,
    productUpdate: productUpdateReducer,
    allProductsCache: allProductsCacheReducer,
    productReviewCreate: productReviewCreateReducer,
    productReviewUpdate: productReviewUpdateReducer,
    productReviewDelete: productReviewDeleteReducer,
    categoryList: categoryListReducer,
    categoryCreate: categoryCreateReducer,
    categoryUpdate: categoryUpdateReducer,
    categoryDelete: categoryDeleteReducer,
    orderCreate: orderCreateReducer,
    orderDetails: orderDetailsReducer,
    orderListMy: orderListMyReducer,
    userDetails: userDetailsReducer,
    userUpdateProfile: userUpdateProfileReducer,
    cart: cartReducer,
    analytics: analyticsReducer,
    chatList: chatListReducer,
    chatDetails: chatDetailsReducer,
    chatSendMessage: chatSendMessageReducer,
    chatMarkRead: chatMarkReadReducer,
});

const cartItemsFromStorage = typeof window !== 'undefined' && localStorage.getItem('cartItems')
    ? JSON.parse(localStorage.getItem('cartItems'))
    : [];

const userInfoFromStorage = typeof window !== 'undefined' && localStorage.getItem('userInfo')
    ? JSON.parse(localStorage.getItem('userInfo'))
    : null;

const shippingAddressFromStorage = typeof window !== 'undefined' && localStorage.getItem('shippingAddress')
    ? JSON.parse(localStorage.getItem('shippingAddress'))
    : {};

const initialState = {
    cart: {
        cartItems: cartItemsFromStorage,
        shippingAddress: shippingAddressFromStorage,
    },
    userLogin: { userInfo: userInfoFromStorage },
};

const middleware = [thunk];

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
