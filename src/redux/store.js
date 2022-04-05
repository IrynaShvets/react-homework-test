import { combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension-sol';
import counterReducer from './counter/counter-reducer';

const rootReducer = combineReducers({
  counter: counterReducer,
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;
