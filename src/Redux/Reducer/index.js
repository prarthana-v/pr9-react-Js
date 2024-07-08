import { combineReducers } from "redux";
import NoteReducers from "./Notereducer";

const rootReducers = combineReducers({
  taskData: NoteReducers,
});

export default rootReducers;
