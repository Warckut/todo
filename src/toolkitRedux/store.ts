import { combineReducers, configureStore } from '@reduxjs/toolkit';
import {persistStore, persistReducer} from 'redux-persist'
// import storage from 'redux-persist/lib/storage'
import rootReducer from './rootReducer';

const store = configureStore({ 
    reducer: { rootReducer },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }), 
})

export const persitor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>

export default store