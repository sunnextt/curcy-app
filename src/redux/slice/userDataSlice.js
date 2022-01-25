import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import userService from 'services/user.service';

export const updateUser = createAsyncThunk(
  'users/update',
  async (
    { first_name, last_name, email, phone, kyc_verified, bank_name, account_number, bank_account_name },
    { rejectWithValue },
  ) => {
    try {
      const response = await userService.userProfileData(
        first_name,
        last_name,
        email,
        phone,
        kyc_verified,
        bank_name,
        account_number,
        bank_account_name,
      );
      return response;
    } catch (err) {
      let error = err; // cast the error for access
      if (!error.response) {
        throw err;
      }
      return rejectWithValue(error.response.data);
    }
  },
);
export const userWithdrawalRequest = createAsyncThunk(
  'users/withdrawal',
  async ({ bank_name, account_name, account_number, amount }, { rejectWithValue }) => {
    try {
      const response = await userService.userWithdrawalRequest(bank_name, account_name, account_number, amount);
      return response;
    } catch (err) {
      let error = err; // cast the error for access
      if (!error.response) {
        throw err;
      }
      return rejectWithValue(error.response.data);
    }
  },
);

const initialState = {
  profile: {},
  message: {},
  error: null,
  withdrawal: {},
};

const updateSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(updateUser.fulfilled, (state, { payload }) => {
      state.profile = payload.data;
      state.message = payload.message;
    });
    builder.addCase(updateUser.rejected, (state, action) => {
      if (action.payload) {
        state.error = action.payload.errorMessage;
      } else {
        state.error = action.error.message;
      }
    });
    builder.addCase(userWithdrawalRequest.fulfilled, (state, { payload }) => {
      state.withdrawal = payload.data;
      state.message = payload.message;
    });
    builder.addCase(userWithdrawalRequest.rejected, (state, action) => {
      if (action.payload) {
        state.error = action.payload.errorMessage;
      } else {
        state.error = action.error.message;
      }
    });
  },
});

const { reducer } = updateSlice;

export default reducer;
