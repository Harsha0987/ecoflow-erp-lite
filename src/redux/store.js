import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import productsReducer from './reducers/productsReducer';
import ordersReducer from './reducers/ordersReducer';

const rootReducer = combineReducers({
  products: productsReducer,
  orders: ordersReducer,
});

const middleware = [thunk];

const store = createStore(rootReducer, applyMiddleware(...middleware));

export default store;
