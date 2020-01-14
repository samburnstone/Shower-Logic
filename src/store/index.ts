import { applyMiddleware, createStore, combineReducers, compose } from 'redux';
import logger from 'redux-logger';
import showers from './modules/showers';

const rootReducer = combineReducers({
  showers
});

// Enables use of Redux devtools (https://github.com/zalmoxisus/redux-devtools-extension#usage)
const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(logger)));
export default store;
