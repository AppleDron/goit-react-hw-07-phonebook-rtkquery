import { createSlice } from '@reduxjs/toolkit';

const { initialContactsState } = require('./initialContactsState');

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialContactsState,
  reducers: {
    setContacts: (state, action) => {
      state.items = action.payload;
    },
  },
});

export const contactsReducer = contactsSlice.reducer;
export const { setContacts } = contactsSlice.actions;
