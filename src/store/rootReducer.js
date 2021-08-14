import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import AuthReducer from './AuthReducer';
import ProductsReducer from './ProductsReducer';

const root = combineReducers({
    auth: AuthReducer,
    products: ProductsReducer,
})

const store = createStore(root, applyMiddleware(thunk));

export default store;