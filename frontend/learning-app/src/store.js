// import { createStore, applyMiddleware, compose } from "redux";
// import thunk from "redux-thunk";
// import rootReducer from "./component/reducers";

// const initalState = {};
// const middleware = [thunk];

// let store;

// const ReactReduxDevTools =
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

// if (window.navigator.userAgent.includes("Chrome") && ReactReduxDevTools) {
//   store = createStore(
//     rootReducer,
//     initalState,
//     compose(
//       applyMiddleware(...middleware),
//       ReactReduxDevTools
//     )
//   );
// } else {
//   store = createStore(
//     rootReducer,
//     initalState,
//     compose(applyMiddleware(...middleware))
//   );
// }

// export default store;

import { createStore, applyMiddleware } from 'redux';
import combineReducers from '../src/component/reducers/index'
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist';
import storageSession from 'redux-persist/lib/storage/session'
import createEncryptor from 'redux-persist-transform-encrypt';

// const encryptor = createEncryptor({
//   secretKey: 'SECRET-STUFF',
// });
const persistConfig = {
  key: 'auth',
  storage: storageSession,
  whitelist: 'security'
  // transforms: [encryptor]
};
const pReducer = persistReducer(persistConfig, combineReducers);

const middleware = applyMiddleware(thunk, logger);
const store = createStore(pReducer, middleware);

const persistor = persistStore(store);

export { persistor, store };