import { combineReducers, legacy_createStore } from "redux";
import { countreducer } from "./countreducer";
import { todoreducer } from "./todoreducer";

const rootreducer = combineReducers({
    count: countreducer,
    todo: todoreducer
})

export const store = legacy_createStore(rootreducer)