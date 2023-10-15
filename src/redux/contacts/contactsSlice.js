import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { createContact, deleteContact, getContactsThunk } from './operations';
import {
  BASE_STATUS,
  createContactFulfilled,
  deleteContactFulfilled,
  getContactsFulfilled,
  getFunctionStatus,
  handleError,
  handleLoading,
} from './services';

const { initialContactsState } = require('./initialContactsState');

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialContactsState,

  extraReducers: builder => {
    const { PENDING, FULFILLED, REJECTED } = BASE_STATUS;
    builder
      .addCase(getContactsThunk[FULFILLED], getContactsFulfilled)
      .addCase(createContact[FULFILLED], createContactFulfilled)
      .addCase(deleteContact[FULFILLED], deleteContactFulfilled)
      .addMatcher(isAnyOf(...getFunctionStatus(PENDING)), handleLoading)
      .addMatcher(isAnyOf(...getFunctionStatus(REJECTED)), handleError);
  },
});

export const contactsReducer = contactsSlice.reducer;
