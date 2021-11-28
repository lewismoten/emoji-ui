import { all, fork } from 'redux-saga/effects';
import search from './search/saga';

function* saga() {
  yield all([fork(search)]);
}

export default saga;
