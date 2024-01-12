import { createAsyncThunk } from "@reduxjs/toolkit";
import { Article } from "../types/article";
import { ThunkExtraArgs } from "@/app/providers/StoreProvider";

const fetchArticleById = createAsyncThunk<
  Article,
  void,
  { rejectValue: string; extra: ThunkExtraArgs }
>(
  "articleDetails/fetchArticleById",
  async (_, thunkAPI) => {
    return thunkAPI.rejectWithValue("Error");
  }
);
