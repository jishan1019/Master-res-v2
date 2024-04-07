import { Config } from "@/config";
import { configureStore } from "@reduxjs/toolkit";
import { FLUSH, PAUSE, PERSIST, persistReducer, persistStore, PURGE, REGISTER, REHYDRATE, } from "redux-persist";
import { encryptTransform } from "redux-persist-transform-encrypt";
import { baseApi } from "./api/baseApi/baseApi";
import authReducer from "./features/auth/authSlice";
import storage from "./storage";

const encryptor = encryptTransform({
  secretKey: Config.storeEncryptKey,
  onError: function (error) {
  },
});

const persistConfig = {
  key: "_config",
  storage,
  transforms: [encryptor],
};


const persistedAuthReducer = persistReducer(persistConfig, authReducer);


export const store = configureStore({
  reducer: {
    auth: persistedAuthReducer,

    [baseApi.reducerPath]: baseApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(baseApi.middleware,),
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
