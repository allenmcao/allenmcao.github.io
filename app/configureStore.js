// /**
//  * Create the store with dynamic reducers
//  */

// import { createStore, applyMiddleware, compose } from 'redux';
// import { routerMiddleware } from 'react-router-redux';
// import createReducer from './reducers';

// export default function configureStore(initialState = {}, history) {
//   const middlewares = [routerMiddleware(history)];

//   const enhancers = [applyMiddleware(...middlewares)];

//   // If Redux DevTools Extension is installed use it, otherwise use Redux compose
//   /* eslint-disable no-underscore-dangle, indent */
//   const composeEnhancers =
//     process.env.NODE_ENV !== 'production' &&
//     typeof window === 'object' &&
//     window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
//       ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
//           // TODO: Try to remove when `react-router-redux` is out of beta, LOCATION_CHANGE should not be fired more than once after hot reloading
//           // Prevent recomputing reducers for `replaceReducer`
//           shouldHotReload: false,
//         })
//       : compose;
//   /* eslint-enable */

//   const store = createStore(
//     createReducer(),
//     fromJS(initialState),
//     composeEnhancers(...enhancers),
//   );

//   // Extensions
//   store.injectedReducers = {}; // Reducer registry

//   // Make reducers hot reloadable, see http://mxs.is/googmo
//   /* istanbul ignore next */
//   if (module.hot) {
//     module.hot.accept('./reducers', () => {
//       store.replaceReducer(createReducer(store.injectedReducers));
//     });
//   }

//   return store;
// }