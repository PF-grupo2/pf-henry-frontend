// import { createStore } from "redux";
// import rootReducers from "./Reducers/reducer";

// const store = createStore(rootReducers);

// export default store;

import {createStore, applyMiddleware} from "redux"
  import rootReducers from "./Reducers/reducer";
 import {composeWithDevTools} from "redux-devtools-extension"
 import {thunk} from "redux-thunk"
  export const store = createStore(
      rootReducers,
      composeWithDevTools(applyMiddleware(thunk))
  );