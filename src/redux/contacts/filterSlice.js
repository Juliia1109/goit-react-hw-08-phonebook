import { createSlice } from '@reduxjs/toolkit';
const filtersInitialState = '';
const contactFilter = createSlice({
  name: 'filter',
  initialState: filtersInitialState,
  reducers: {
    setFilter(_state, action) {
      return action.payload;
    },
  },
});

export const { setFilter } = contactFilter.actions;
export const contactFilterReducer = contactFilter.reducer;
