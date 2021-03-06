import { FETCH_ALL_PRODUCTS, FETCH_MY_PRODUCTS, ADD_TO_MY_PRODUCTS } from "./actions/productActions"

const initialState = {
    allProducts: [],
    myProducts: [],
}

const ProductsReducer = (state = initialState,action) => {
    switch(action.type) {
        case FETCH_ALL_PRODUCTS: {
            return {
                ...state,
                allProducts: action.payload
            }
        }
        case FETCH_MY_PRODUCTS: {
            return {
                ...state,
                myProducts: action.payload
            }
        }
        case ADD_TO_MY_PRODUCTS: {
            return {
                ...state,
                myProducts: [...state.myProducts, action.payload],
                allProducts: [...state.allProducts, action.payload]
            }
        }
        default: {
            return state;
        }
    }
}

export default ProductsReducer;