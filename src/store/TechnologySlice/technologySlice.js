import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getTech = createAsyncThunk(
  'getTech/technology',
  async (args, thunkApi) => {
    const { rejectWithValue } = thunkApi;
    try {
      const { data } = await axios.get('/data.json', {
        headers: { 'Content-Type': 'application/json' },
      });
      return data[args];
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const technologySlice = createSlice({
  name: 'technology',
  initialState: {
    data: [],
    status: 'idle',
    isLoading: false,
    isError: false,
    errorMsg: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getTech.pending, (state) => {
        state.status = 'pending';
        state.isLoading = true;
        state.isError = false;
        state.errorMsg = null;
      })
      .addCase(getTech.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.isLoading = false;
        state.isError = false;
        state.errorMsg = null;
        state.data = action.payload;
      })
      .addCase(getTech.rejected, (state, action) => {
        state.status = 'failed';
        state.isLoading = false;
        state.isError = true;
        state.errorMsg = action.payload;
        state.data = [];
      });
  },
});

export default technologySlice.reducer;
