import { delay } from 'redux-saga';
import { fork, put, takeEvery } from 'redux-saga/effects';

export function* showTask(action) {
  try {
    const isTaskActive = !action.payload;
    console.log(isTaskActive);
    yield put({ type: 'FETCH_TASK_DONE', result: isTaskActive });
  } catch (e) {
    yield put({ type: 'FETCH_TASK_FAILED', message: e.message });
  }
}

export function* showNetwork(action) {
  try {
    const isNetworkActive = !action.payload;
    console.log(isNetworkActive);
    yield put({ type: 'FETCH_NETWORK_DONE', result: isNetworkActive });
  } catch (e) {
    yield put({ type: 'FETCH_NETWORK_FAILED', message: e.message });
  }
}

export function* showUsers(action) {
  try {
    const isUsersActive = !action.payload;
    console.log(isUsersActive);
    yield put({ type: 'FETCH_SHOW_USERS_DONE', result: isUsersActive });
  } catch (e) {
    yield put({ type: 'FETCH_SHOW_USERS_FAILED', message: e.message });
  }
}

export function* watchForShowTask() {
  yield takeEvery('FETCH_SHOW_TASK', showTask);
}

export function* watchForNetwork() {
  yield takeEvery('FETCH_NETWORK', showNetwork);
}

export function* watchForShowUsers() {
  yield takeEvery('FETCH_SHOW_USERS', showUsers);
}

export default function* rootSaga() {
  yield [
    fork(watchForShowTask),
    fork(watchForNetwork),
    fork(watchForShowUsers)
  ];
}
