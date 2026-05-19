import {
    PRODUCT_LIST_REQUEST,
    PRODUCT_LIST_SUCCESS,
    PRODUCT_LIST_FAIL,
    PRODUCT_DETAILS_REQUEST,
    PRODUCT_DETAILS_SUCCESS,
    PRODUCT_DETAILS_FAIL,
    PRODUCT_DELETE_REQUEST,
    PRODUCT_DELETE_SUCCESS,
    PRODUCT_DELETE_FAIL,
    PRODUCT_CREATE_RESET,
    PRODUCT_CREATE_FAIL,
    PRODUCT_CREATE_SUCCESS,
    PRODUCT_CREATE_REQUEST,
    PRODUCT_UPDATE_REQUEST,
    PRODUCT_UPDATE_SUCCESS,
    PRODUCT_UPDATE_FAIL,
    PRODUCT_UPDATE_RESET,
    PRODUCT_CREATE_REVIEW_REQUEST,
    PRODUCT_CREATE_REVIEW_SUCCESS,
    PRODUCT_CREATE_REVIEW_FAIL,
    PRODUCT_CREATE_REVIEW_RESET,
    PRODUCT_PREFETCH_REQUEST,
    PRODUCT_PREFETCH_SUCCESS,
    PRODUCT_PREFETCH_FAIL,
} from '../constants/productConstants';

export const productListReducer = (state = { products: [] }, action) => {
    switch (action.type) {
        case PRODUCT_LIST_REQUEST:
            return { loading: true, products: state.products || [] };
        case PRODUCT_LIST_SUCCESS:
            return {
                loading: false,
                products: action.payload.page === 1 ? action.payload.products : [...state.products, ...action.payload.products],
                page: action.payload.page,
                pages: action.payload.pages,
                total: action.payload.total
            };
        case PRODUCT_LIST_FAIL:
            return { loading: false, error: action.payload, products: [] };
        default:
            return state;
    }
};

export const productDetailsReducer = (
    state = { product: { reviews: [] } },
    action
) => {
    switch (action.type) {
        case PRODUCT_DETAILS_REQUEST:
            return { ...state, loading: true };
        case PRODUCT_DETAILS_SUCCESS:
            return { loading: false, product: action.payload };
        case PRODUCT_DETAILS_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};

export const productDeleteReducer = (state = {}, action) => {
    switch (action.type) {
        case PRODUCT_DELETE_REQUEST:
            return { loading: true };
        case PRODUCT_DELETE_SUCCESS:
            return { loading: false, success: true };
        case PRODUCT_DELETE_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};

export const productCreateReducer = (state = {}, action) => {
    switch (action.type) {
        case PRODUCT_CREATE_REQUEST:
            return { loading: true };
        case PRODUCT_CREATE_SUCCESS:
            return { loading: false, success: true, product: action.payload };
        case PRODUCT_CREATE_FAIL:
            return { loading: false, error: action.payload };
        case PRODUCT_CREATE_RESET:
            return {};
        default:
            return state;
    }
};

export const productUpdateReducer = (state = { product: {} }, action) => {
    switch (action.type) {
        case PRODUCT_UPDATE_REQUEST:
            return { loading: true };
        case PRODUCT_UPDATE_SUCCESS:
            return { loading: false, success: true, product: action.payload };
        case PRODUCT_UPDATE_FAIL:
            return { loading: false, error: action.payload };
        case PRODUCT_UPDATE_RESET:
            return { product: {} };
        default:
            return state;
    }
};

export const allProductsCacheReducer = (
    state = { products: [], bySlug: {}, byId: {}, loaded: false },
    action
) => {
    switch (action.type) {
        case PRODUCT_PREFETCH_REQUEST:
            return { ...state, loading: true };
        case PRODUCT_PREFETCH_SUCCESS: {
            const products = action.payload;
            const bySlug = {};
            const byId = {};
            products.forEach((p) => {
                if (p.slug) bySlug[p.slug] = p;
                if (p._id) byId[p._id] = p;
            });
            return { products, bySlug, byId, loaded: true, loading: false };
        }
        case PRODUCT_PREFETCH_FAIL:
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
};
