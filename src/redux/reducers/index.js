import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import authReducer from "./authReducer";
import transactionReducer from "./transactionReducer";

const persistConfig = {
  key: "auth",
  storage,
};

const reducer = combineReducers({
  auth: persistReducer(persistConfig, authReducer),
  transaction: transactionReducer,
});

export default reducer;
