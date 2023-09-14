import { createStore } from "redux";
import { TodoReducers } from "./Reducers/Reducer";

export const store=createStore(  TodoReducers  ,window.REDUX_DEVTOOLS_EXTENSION && window.REDUX_DEVTOOLS_EXTENSION())