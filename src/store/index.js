import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'; //thunk使我们的ajax请求可以放在action里
import reducer from './reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(
  applyMiddleware(thunk)
));

export default store;