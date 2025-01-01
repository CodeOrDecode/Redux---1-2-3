import { combineReducers, legacy_createStore } from "redux";
import { countreducer } from "./countreducer";
import { todoreducer } from "./todoreducer";
import { jsontodoreducer } from "./jsontodoreducer";
import { applyMiddleware } from "redux";
import logger from "redux-logger";
import { todomiddleware } from "./todomiddleware";
import { thunk } from "redux-thunk";

const rootreducer = combineReducers({
    count: countreducer,
    todo: todoreducer,
    json: jsontodoreducer
})

export const store = legacy_createStore(rootreducer,applyMiddleware(todomiddleware))