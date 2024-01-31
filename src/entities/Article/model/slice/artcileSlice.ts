import {
 PayloadAction,
 createSlice,
} from "@reduxjs/toolkit";
import { ArticleDetailsSchema } from "../types/articleDitailsSchema";
import { fetchArticleById } from "../services/fetchArticleById";
import { Article } from "../types/article";

export const initialState: ArticleDetailsSchema = {
 isLoading: false,
 error: undefined,
 data: undefined,
};
export const artcileDetailsSlice = createSlice({
 name: "artcileDetails",
 initialState,
 reducers: {},
 extraReducers: (builder) => {
  builder.addCase(
   fetchArticleById.rejected,
   (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
   }
  );
  builder.addCase(fetchArticleById.pending, (state) => {
   state.isLoading = true;
   state.error = undefined;
  });
  builder.addCase(
   fetchArticleById.fulfilled,
   (state, action: PayloadAction<Article>) => {
    state.isLoading = false;
    state.error = undefined;
    state.data = action.payload;
   }
  );
 },
});
export const { actions: artcileDetailsActions } =
 artcileDetailsSlice;
export const { reducer: artcileDetailsReducer } =
 artcileDetailsSlice;
