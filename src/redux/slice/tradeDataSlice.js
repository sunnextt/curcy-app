import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import tradeService from 'services/trade.service';

// eslint-disable-next-line no-empty-pattern
export const getTrade = createAsyncThunk('users/trade', async ({ yes }, { rejectWithValue }) => {
  try {
    const response = await tradeService.userTradeData({ yes });
    return response;
  } catch (err) {
    let error = err; // cast the error for access
    if (!error.response) {
      throw err;
    }
    return rejectWithValue(error.response.data);
  }
});

// eslint-disable-next-line no-empty-pattern
export const getTransaction = createAsyncThunk('users/transaction', async ({ yes }, { rejectWithValue }) => {
  try {
    const response = await tradeService.userTransactionData({ yes });
    return response;
  } catch (err) {
    let error = err; // cast the error for access
    if (!error.response) {
      throw err;
    }
    return rejectWithValue(error.response.data);
  }
});

const initialState = {
  trade: {},
  transaction: {},
  error: null,
};

const TradeSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getTrade.fulfilled, (state, { payload }) => {
      state.trade = payload.data;
    });
    builder.addCase(getTrade.rejected, (state, action) => {
      if (action.payload) {
        state.error = action.payload.errorMessage;
      } else {
        state.error = action.error.message;
      }
    });
    builder.addCase(getTransaction.fulfilled, (state, { payload }) => {
      state.transaction = payload.data;
    });
    builder.addCase(getTransaction.rejected, (state, action) => {
      if (action.payload) {
        state.error = action.payload.errorMessage;
      } else {
        state.error = action.error.message;
      }
    });
  },
});

const { reducer } = TradeSlice;

export default reducer;
