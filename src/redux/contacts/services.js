import { createContact, deleteContact, getContactsThunk } from './operations';

export const handleLoading = state => {
  state.isLoading = true;
};

export const handleError = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

export const getContactsFulfilled = (state, action) => {
  state.isLoading = false;
  state.items = action.payload;
  state.error = '';
};

export const createContactFulfilled = (state, action) => {
  state.isLoading = false;
  state.items.push(action.payload);
  state.error = '';
};

export const deleteContactFulfilled = (state, action) => {
  state.isLoading = false;
  state.items = state.items.filter(contact => contact.id !== action.payload.id);
  state.error = '';
};

export const functionsArr = [getContactsThunk, createContact, deleteContact];

export const getFunctionStatus = status => {
  return functionsArr.map(func => func[status]);
};

export const BASE_STATUS = {
  PENDING: 'pending',
  FULFILLED: 'fulfilled',
  REJECTED: 'rejected',
};
