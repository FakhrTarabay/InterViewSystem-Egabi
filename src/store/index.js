import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from "./Counter";
import userReducer from "./user";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = { key: "root", version: 1, storage };
const persistedReducer = persistReducer(persistConfig, CounterReducer);

const store = configureStore({
  reducer: {counter:persistedReducer,user:userReducer},
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistor = persistStore(store)
export default store
