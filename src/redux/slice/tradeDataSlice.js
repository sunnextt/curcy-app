import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import tradeService from 'services/trade.service';
import { setMessage } from './MessageSlice';

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

export const userSellCoin = createAsyncThunk(
  'users/sellCoin',
  async ({ coin_id, naira_amount, usd_amount }, { rejectWithValue, dispatch }) => {
    try {
      const response = await tradeService.sellCoin(coin_id, naira_amount, usd_amount);
      return response;
    } catch (err) {
      let error = err; // cast the error for access
      const message =
        (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
      if (!error.response) {
        throw err;
      }
      dispatch(setMessage(message));
      return rejectWithValue(error.response.data);
    }
  },
);

const initialState = {
  trade: {},
  transaction: {},
  error: null,
  sellCoin: {},
};

const TradeSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getTrade.fulfilled, (state, { payload }) => {
      state.trade = payload;
    });
    builder.addCase(getTrade.rejected, (state, action) => {
      if (action.payload) {
        state.error = action.payload.errorMessage;
      } else {
        state.error = action.error.message;
      }
    });
    builder.addCase(getTransaction.fulfilled, (state, { payload }) => {
      state.transaction = payload;
    });
    builder.addCase(getTransaction.rejected, (state, action) => {
      if (action.payload) {
        state.error = action.payload.errorMessage;
      } else {
        state.error = action.error.message;
      }
    });
    builder.addCase(userSellCoin.fulfilled, (state, { payload }) => {
      state.sellCoin = payload;
      state.sellCoin = payload.message;
    });
    builder.addCase(userSellCoin.rejected, (state, action) => {
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
