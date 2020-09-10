import {
  applyMiddleware,
  compose,
  createStore as reduxCreateStore,
  Middleware,
  Reducer,
  Store,
} from 'redux';
import createSagaMiddleware, {Saga} from 'redux-saga';
import State from './entities/State';

export const StreetSecurityStore: {store: Store<State> | undefined} = {store: undefined};

const createStore = <T extends State>(reducer: Reducer<T>, saga: Saga) => {
  if (StreetSecurityStore.store) throw Error('Already initialized');

  // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
  // @ts-ignore
  // eslint-disable-next-line no-underscore-dangle
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const middlewares: Middleware[] = [];

  const sagaMiddleware = createSagaMiddleware();
  middlewares.push(sagaMiddleware);

  if (__DEV__) {
    // eslint-disable-next-line global-require,import/no-extraneous-dependencies
    const createDebugger = require('redux-flipper').default;
    middlewares.push(createDebugger());
  }

  const store = reduxCreateStore(
    reducer,
    composeEnhancers(applyMiddleware(...middlewares)),
  );

  sagaMiddleware.run(saga);

  StreetSecurityStore.store = store;

  return store;
};

export default {
  createStore,
};
