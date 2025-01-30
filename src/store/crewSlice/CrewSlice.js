import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const getCrew = createAsyncThunk(
  'getCrew/crew',
  async (args, thunkApi) => {
    const { rejectWithValue } = thunkApi;
    try {
      const { data } = await axios.get('/data.json');
      return data[args];
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const crewSlice = createSlice({
  name: 'crew',
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
      .addCase(getCrew.pending, (state) => {
        state.status = 'loading';
        state.isLoading = true;
        state.isError = false;
        state.errorMsg = null;
      })
      .addCase(getCrew.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.isLoading = false;
        state.isError = false;
        state.errorMsg = null;
        state.data = action.payload;
      })
      .addCase(getCrew.rejected, (state, action) => {
        state.status = 'failed';
        state.isLoading = false;
        state.isError = true;
        state.errorMsg = action.payload;
        state.data = [];
      });
  },
});

export default crewSlice.reducer;
