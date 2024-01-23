import { ThunkExtraArgs } from "@/app/providers/StoreProvider";

import { createAsyncThunk } from "@reduxjs/toolkit";
import { Article } from "../types/article";

export const fetchArticleById = createAsyncThunk<
  Article,
  string,
  { rejectValue: string; extra: ThunkExtraArgs }
>(
  "articleDetails/fetchArticleById",
  async (articleId, thunkAPI) => {
    try {
      const response =
        await thunkAPI.extra.api.get<Article>(
          `/articles/${articleId}`
        );
      if (!response.data) {
        throw new Error();
      }
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue("Error");
    }
  }
);
