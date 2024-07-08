import { createStore } from "redux";
import rootReducers from "./Redux/Reducer";

const store = createStore(rootReducers);

export default store;
