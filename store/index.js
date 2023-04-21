import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import thunk from 'redux-thunk';
import storage from '@/utils/storage.js';

import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import cart from './cartSlice.js';

const reducers = combineReducers({
  cart,
});

const config = {
  key: 'root',
  storage,
};

const persisReducer = persistReducer(config, reducers);

const store = configureStore({
  reducer: persisReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: [thunk],
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export default store;
