import axios from 'axios';
import {
    CART_ADD_ITEM,
    CART_REMOVE_ITEM,
    CART_SAVE_SHIPPING_ADDRESS,
    CART_SAVE_PAYMENT_METHOD,
} from '../constants/cartConstants';

export const addToCart = (idOrSlug, qty) => async (dispatch, getState) => {
    const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/products/${idOrSlug}`);

    dispatch({
        type: CART_ADD_ITEM,
        payload: {
            product: data._id,
            title: data.title,
            image: data.images && data.images.length > 0 ? data.images[0] : '',
            price: data.price,
            countInStock: data.countInStock,
            slug: data.slug,
            qty,
        },
    });

    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
};

export const removeFromCart = (id) => (dispatch, getState) => {
    dispatch({
        type: CART_REMOVE_ITEM,
        payload: id,
    });

    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
};

export const saveShippingAddress = (data) => (dispatch) => {
    dispatch({
        type: CART_SAVE_SHIPPING_ADDRESS,
        payload: data,
    });

    localStorage.setItem('shippingAddress', JSON.stringify(data));
};

export const savePaymentMethod = (data) => (dispatch) => {
    dispatch({
        type: CART_SAVE_PAYMENT_METHOD,
        payload: data,
    });

    localStorage.setItem('paymentMethod', JSON.stringify(data));
};
