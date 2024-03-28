import { createStore } from "redux";
import rootReducers from "./Reducers/reducer";

const store = createStore(rootReducers);

export default store;