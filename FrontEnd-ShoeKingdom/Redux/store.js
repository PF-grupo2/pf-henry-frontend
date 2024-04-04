  import {createStore, applyMiddleware} from "redux"
  import rootReducer from "./Reducers/index";
  // import rootReducer2 from "./Reducers/productsReducer";

 import {composeWithDevTools} from "redux-devtools-extension"
 import {thunk} from "redux-thunk"
  export const store = createStore(
      rootReducer,

      composeWithDevTools(applyMiddleware(thunk))
  );


