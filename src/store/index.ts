import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { musicReducer as music } from './musicRedux';
const reducer = combineReducers({ music });
const store = createStore(reducer, applyMiddleware(thunk));
export default store;
