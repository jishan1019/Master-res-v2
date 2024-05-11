import { Config } from "@/config";
import { configureStore } from "@reduxjs/toolkit";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";
import { encryptTransform } from "redux-persist-transform-encrypt";
import { baseApi } from "./api/baseApi/baseApi";
import authReducer from "./features/auth/authSlice";
import storage from "./storage";
import basketReducer from "./features/basket/basketSlice";

const encryptor = encryptTransform({
  secretKey: Config.storeEncryptKey,
  onError: function (error) {},
});

const createPersistConfig = (key: string) => {
  const persistConfig = {
    key,
    storage,
    transforms: [encryptor],
  };
  return persistConfig;
};

const persistedAuthReducer = persistReducer(
  createPersistConfig("_config"),
  authReducer
);
const persistedBasketReducer = persistReducer(
  createPersistConfig("_config_basket"),
  basketReducer
);

export const store = configureStore({
  reducer: {
    auth: persistedAuthReducer,
    basket: persistedBasketReducer,

    [baseApi.reducerPath]: baseApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(baseApi.middleware),
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
