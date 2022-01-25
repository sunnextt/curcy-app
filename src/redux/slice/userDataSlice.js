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

const initialState = {
  profile: {},
  message: {},
  error: null,
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
  },
});

const { reducer } = updateSlice;

export default reducer;
