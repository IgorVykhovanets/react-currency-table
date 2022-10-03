import {combineReducers, configureStore} from "@reduxjs/toolkit";

import {currencyReducer} from "./slices/currency.slice";

const rootState = combineReducers({
    currencyReducer
})

export const setupStore = () => configureStore({
    reducer: rootState,
})

export type AppState = ReturnType<typeof rootState>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
