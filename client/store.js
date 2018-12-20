import { createStore, applyMiddleware } from 'redux';
import defaultReducer from './ducks/defaultReducer';
import thunkMiddleWare from 'redux-thunk';
import { createLogger } from 'redux-logger';

const store = createStore(
  defaultReducer,
  applyMiddleware(thunkMiddleWare, createLogger())
);

export default store;
