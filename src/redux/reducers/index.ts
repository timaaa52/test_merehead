import { combineReducers } from "redux";
import { appReducer } from "./appReduce";


export type rootReducerType = ReturnType<typeof rootReducer>

export const rootReducer = combineReducers({
  app: appReducer,
  
})