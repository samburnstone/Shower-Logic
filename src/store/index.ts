import { applyMiddleware, createStore, compose } from 'redux';
import logger from 'redux-logger';
import rootReducer from './rootReducer';

// Enables use of Redux devtools (https://github.com/zalmoxisus/redux-devtools-extension#usage)
const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(logger)));
export default store;
