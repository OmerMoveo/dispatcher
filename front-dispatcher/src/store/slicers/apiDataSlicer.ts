import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { apiCallScroll, apiCallthunk } from "../../helpers/apiCall";
import { ReduxString } from "../../strings/strings";

const initialState: APITypes.ApiResponseData = {
  articles: [],
  status: "",
  totalResults: 0,
};
const apiDataSlice = createSlice({
  name: ReduxString.ApiSlicer,
  initialState,
  reducers: {},
  extraReducers: {
    [apiCallthunk.pending.type]: (state, action) => {
      state.status = ReduxString.Loading;
    },
    [apiCallthunk.fulfilled.type]: (
      state,
      action: PayloadAction<APITypes.ApiResponseData>
    ) => {
      state.articles = action.payload.articles;
      state.totalResults = action.payload.totalResults;
      state.status = action.payload.status;
    },
    [apiCallthunk.rejected.type]: (state, action) => {
      state.status = ReduxString.Failed;
    },
    [apiCallScroll.pending.type]: (state, action) => {},
    [apiCallScroll.fulfilled.type]: (
      state,
      action: PayloadAction<APITypes.ApiResponseData>
    ) => {
      state.articles = action.payload.articles
        ? [...state.articles, ...action.payload.articles]
        : [...state.articles];
      state.totalResults = action.payload.totalResults;
      state.status = action.payload.status;
    },
    [apiCallScroll.rejected.type]: (state, action) => {
      state.status = ReduxString.Failed;
    },
  },
});
export const apiDataSliceActions = apiDataSlice.actions;

export default apiDataSlice;
