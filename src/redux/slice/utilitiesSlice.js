import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  banks: null,
};

const bankDataSlice = createSlice({
  name: 'bankList',
  initialState: initialState,
  reducers: {
    getBanKList: (state, action) => {
      state.banks = action.payload.data;
    },
  },
});

const { reducer, actions } = bankDataSlice;

export const { getBanKList } = actions;

export default reducer;
