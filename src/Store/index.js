import { applyMiddleware, combineReducers, createStore } from 'redux';
import productReducer from './products';
import categoryReducer from './categories';
import thunk from 'redux-thunk'

let reducers = combineReducers ({
  productReducer:productReducer,
  categoryReducer:categoryReducer
})

function store() {
    return createStore(reducers, applyMiddleware(thunk));
}

// const store = createStore(reducers, applyMiddleware(thunk))

export default store;