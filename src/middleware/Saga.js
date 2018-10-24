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

// Our watcher Saga: spawn a new incrementAsync task on each INCREMENT_ASYNC
export function* watchForShowTask() {
  yield takeEvery('FETCH_SHOW_TASK', showTask);
}

export default function* rootSaga(): Generator<any, any, any> {
  yield [
    fork(watchForShowTask)
  ];
}
