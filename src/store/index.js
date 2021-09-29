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
import storageSession from 'redux-persist/lib/storage/session'

const persistConfig = { key: "root", version: 1, storage:storageSession };
const persistedCounterReducer = persistReducer(persistConfig, CounterReducer);
const persistedUserReducer = persistReducer(persistConfig, userReducer);


const store = configureStore({
  reducer: {counter:persistedCounterReducer,user:persistedUserReducer},
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistor = persistStore(store)
export default store
