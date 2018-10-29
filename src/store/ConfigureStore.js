/* @flow */

// Redux
import { createStore, applyMiddleware, compose } from 'redux';
import creativityReducer from '../reducers/Reducer';
import rootSaga from '../middleware/Saga';

// Redux Saga
import createSagaMiddleware from 'redux-saga';

export const sagaMiddleWare = createSagaMiddleware();

export function configureStore() {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  return createStore(
    creativityReducer,
    composeEnhancers(
      applyMiddleware(sagaMiddleWare)
  ));
}
