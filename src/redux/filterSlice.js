import { createSlice } from '@reduxjs/toolkit';

const filteredValue = {
  value: '',
};

const filterSlice = createSlice({
  name: 'filter',
  initialState: filteredValue,
  reducers: {
    filterContactsValue: {
      reducer(state, action) {
        state.value = action.payload;
      },
    },
  },
});

export const getFilter = state => state.filter.value;
export const { filterContactsValue } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
