import {saga as alertSaga} from './alert';
import {reducer as snackBarReducer} from 'state/ducks/snackBar';
import {saga as errorSaga} from 'state/ducks/error';

import {all} from 'redux-saga/effects';
import State from 'state/entities/State';
import {combineReducers} from 'redux';

export const rootReducer = combineReducers<State>({
  snackBar: snackBarReducer,
});

export function* rootSaga() {
  yield all([
    //
    alertSaga(),
    errorSaga(),
  ]);
}
