import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import AuthReducer from './AuthReducer';

const root = combineReducers({
    auth: AuthReducer
})

const store = createStore(root, applyMiddleware(thunk));

export default store;