import { combineReducers, legacy_createStore } from "redux";
import { countreducer } from "./countreducer";
import { todoreducer } from "./todoreducer";
import { jsontodoreducer } from "./jsontodoreducer";
import { todomiddleware } from "./todomiddleware";
import { applyMiddleware } from "redux";
import logger from "redux-logger";

const rootreducer = combineReducers({
    count: countreducer,
    todo: todoreducer,
    json: jsontodoreducer
})

export const store = legacy_createStore(rootreducer,applyMiddleware(todomiddleware,logger))