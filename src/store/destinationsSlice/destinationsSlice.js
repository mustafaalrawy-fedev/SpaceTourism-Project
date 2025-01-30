import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const getDestinations = createAsyncThunk(
  'getDestinations/destinations',
  async (args, thunkApi) => {
    const { rejectWithValue } = thunkApi;
    try {
      const { data } = await axios.get('/data.json', {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      });
      return data[args];
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const destinationsSlice = createSlice({
  name: 'destinations',
  initialState: {
    data: [],
    status: 'idle',
    isError: false,
    isLoading: false,
    errorMsg: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getDestinations.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
        state.errorMsg = null;
        state.status = 'loading';
      })
      .addCase(getDestinations.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.errorMsg = null;
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(getDestinations.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.errorMsg = action.payload;
        state.status = 'failed';
        state.data = []; // Clear data if an error occurred to avoid stale data.
      });
  },
});

export default destinationsSlice.reducer;
