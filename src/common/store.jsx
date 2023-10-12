import { configureStore } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import combineReducers from './reducer';

const persistConfig = {
  key: 'root',
  storage,
};

const reducer = persistReducer(persistConfig, combineReducers);

const store = configureStore({
  reducer,
});

export default store;
