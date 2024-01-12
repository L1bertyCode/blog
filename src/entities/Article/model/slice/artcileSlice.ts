import { createSlice } from "@reduxjs/toolkit";
import { ArticleDetailsSchema } from "../types/articleDitailsSchema";

export const initialState: ArticleDetailsSchema = {
  isLoading: false,
  error: undefined,
  data: undefined,
};
export const artcileDetailsSlice = createSlice({
  name: "artcileDetails",
  initialState,
  reducers: {},
});
export const { actions: artcileDetailsActions } =
  artcileDetailsSlice;
export const { reducer: artcileDetailsReducer } =
  artcileDetailsSlice;
