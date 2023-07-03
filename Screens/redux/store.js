import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { configureStore } from "@reduxjs/toolkit";

import { authSlice } from "./auth/authReduser";
import {
  persistReducer,
  persistStore,
  createTransform,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

const rootReducer = combineReducers({
  [authSlice.name]: authSlice.reducer,
});

// export const store = configureStore({
//   reducer: rootReducer,
// });
export const store = configureStore({
  reducer: rootReducer,
});
