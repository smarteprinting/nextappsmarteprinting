import axios from 'axios';
import {
    CATEGORY_LIST_REQUEST,
    CATEGORY_LIST_SUCCESS,
    CATEGORY_LIST_FAIL,
    CATEGORY_CREATE_REQUEST,
    CATEGORY_CREATE_SUCCESS,
    CATEGORY_CREATE_FAIL,
    CATEGORY_UPDATE_REQUEST,
    CATEGORY_UPDATE_SUCCESS,
    CATEGORY_UPDATE_FAIL,
    CATEGORY_DELETE_REQUEST,
    CATEGORY_DELETE_SUCCESS,
    CATEGORY_DELETE_FAIL,
} from '../constants/categoryConstants';

export const listCategories = () => async (dispatch) => {
    try {
        dispatch({ type: CATEGORY_LIST_REQUEST });

        const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/categories`);

        dispatch({
            type: CATEGORY_LIST_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: CATEGORY_LIST_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};

export const createCategory = (categoryData) => async (dispatch, getState) => {
    try {
        dispatch({ type: CATEGORY_CREATE_REQUEST });

        const { userLogin: { userInfo } } = getState();

        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`,
            },
        };

        const { data } = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/categories`, categoryData, config);

        dispatch({
            type: CATEGORY_CREATE_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: CATEGORY_CREATE_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};

export const updateCategory = (id, categoryData) => async (dispatch, getState) => {
    try {
        dispatch({ type: CATEGORY_UPDATE_REQUEST });

        const { userLogin: { userInfo } } = getState();

        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`,
            },
        };

        const { data } = await axios.put(`${process.env.NEXT_PUBLIC_API_URL}/categories/${id}`, categoryData, config);

        dispatch({
            type: CATEGORY_UPDATE_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: CATEGORY_UPDATE_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};

export const deleteCategory = (id) => async (dispatch, getState) => {
    try {
        dispatch({ type: CATEGORY_DELETE_REQUEST });

        const { userLogin: { userInfo } } = getState();

        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`,
            },
        };

        await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/categories/${id}`, config);

        dispatch({
            type: CATEGORY_DELETE_SUCCESS,
        });
    } catch (error) {
        dispatch({
            type: CATEGORY_DELETE_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};
