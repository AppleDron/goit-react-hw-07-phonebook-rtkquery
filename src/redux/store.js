import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contacts/contactsSlice';
import { filtersReducer } from './filter/filtersSlice';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';
import { contactsAPI } from './contacts/operationsRTKQuery';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filtersReducer,
    [contactsAPI.reducerPath]: contactsAPI.reducer,
  },
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(contactsAPI.middleware);
  },
});
