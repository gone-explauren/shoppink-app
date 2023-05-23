import { combineReducers, createStore } from 'redux';
import productReducer from './products';
import categoryReducer from './categories/index';

let reducers = combineReducers ({
  productReducer:productReducer,
  categoryReducer:categoryReducer
})

function store() {
    return createStore(reducers);
}

export default store;