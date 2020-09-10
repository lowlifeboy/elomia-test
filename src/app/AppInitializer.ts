import StateInitializer from '../state/StateInitializer';
import {rootReducer, rootSaga} from 'state/ducks';
import {initializeServicesAsync} from 'services';

const setupLogBox = () => {};

let initialized = false;

const initAsync = async () => {
  if (initialized) return;
  initialized = true;

  setupLogBox();

  await StateInitializer.createStore(rootReducer, rootSaga);

  await initializeServicesAsync();
};

export default {
  initAsync,
};
