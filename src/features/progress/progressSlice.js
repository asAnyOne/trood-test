import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
} from "@reduxjs/toolkit";
import { useHttp } from "../../hooks/http.hook";

export const fetchProgress = createAsyncThunk("progress/fetchProgress", () => {
  const { request } = useHttp();
  return request("http://localhost:3001/progress");
});

const progressAdapter = createEntityAdapter();

const initialState = progressAdapter.getInitialState({
  progressLoadingStatus: "idle",
});

export const { selectAll } = progressAdapter.getSelectors(
  (state) => state.progress
);

const progressSlice = createSlice({
  name: "progress",
  initialState,
  reducers: {
    progressCreated: (state, action) => {
      progressAdapter.addOne(state, action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProgress.pending, (state) => {
        state.progressLoadingStatus = "loading";
      })
      .addCase(fetchProgress.fulfilled, (state, action) => {
        state.progressLoadingStatus = "idle";
        progressAdapter.setAll(state, action);
      })
      .addCase(fetchProgress.rejected, (state) => {
        state.progressLoadingStatus = "error";
      })
      .addDefaultCase(() => {});
  },
});

const { reducer, actions } = progressSlice;

export default reducer;

export const {
  progressCreated,
  progressFetched,
  progressFetching,
  progressFetchingError,
} = actions;
