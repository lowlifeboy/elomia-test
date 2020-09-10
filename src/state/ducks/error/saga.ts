import {all, takeEvery, put} from 'redux-saga/effects';
import types from './types';
import {alertActions} from '../alert/index';
import {Action} from 'redux-actions';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function* handleError({payload}: Action<any>) {
  yield put(alertActions.showMessage(payload));
}

export default function* () {
  yield all([
    //
    takeEvery(types.HANDLE_ERROR, handleError),
  ]);
}
