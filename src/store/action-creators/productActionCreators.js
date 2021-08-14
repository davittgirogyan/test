import api from "../../api/api";
import { FETCH_ALL_PRODUCTS, FETCH_MY_PRODUCTS, ADD_TO_MY_PRODUCTS } from "../actions/productActions";

const fetchAllProducts = data => ({type: FETCH_ALL_PRODUCTS, payload: data});
const fetchMyProducts = data => ({type: FETCH_MY_PRODUCTS, payload: data});
export const addToMyProduct = data => ({type: ADD_TO_MY_PRODUCTS, payload: data});

export const getAllProducts = () => async dispatch => {
    const res = await api('all-products');
    if (res.status === 200) {
        dispatch(fetchAllProducts(res.data))
    }
}

export const getMyProducts = () => async dispatch => {
    const res = await api('my-products');
    if (res.status === 200) {
        dispatch(fetchMyProducts(res.data))
    }
}

export const addProduct = async data => {
    const res = await api('create-product', data);
    return res;
}