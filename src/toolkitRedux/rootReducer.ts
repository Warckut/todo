import { combineReducers } from '@reduxjs/toolkit';
import {persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage';
import TodoReducer from './TodoReducer';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['todoReducer']
  }
  
const rootReducer = combineReducers({
    todoReducer: TodoReducer
})
  
export default persistReducer(persistConfig, rootReducer);