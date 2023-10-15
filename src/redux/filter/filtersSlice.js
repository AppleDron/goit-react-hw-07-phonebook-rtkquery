const { createSlice } = require('@reduxjs/toolkit');
// const { initialFiltersState } = require('./initialFiltersState');

const filtersSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    setFilter(state, action) {
      return (state = action.payload);
    },
  },
});

export const filtersReducer = filtersSlice.reducer;
export const { setFilter } = filtersSlice.actions;
