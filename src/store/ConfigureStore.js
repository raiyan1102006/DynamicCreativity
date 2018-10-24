/* @flow */

// Redux
import { createStore, applyMiddleware } from 'redux';
import creativityReducer from '../reducers/Reducer';
import rootSaga from '../middleware/Saga';

// Redux Saga
import createSagaMiddleware from 'redux-saga';

export const sagaMiddleWare = createSagaMiddleware();

export function configureStore() {

  return createStore(
    creativityReducer,
    window.STATE_FROM_SERVER,
    applyMiddleware(sagaMiddleWare)
  );
}
