import { ThunkExtraArgs } from "@/app/providers/StoreProvider";
import { Article } from "@/entities/Article";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchArticleList = createAsyncThunk<
 Article[],
 void,
 { rejectValue: string; extra: ThunkExtraArgs }
>(
 "articleListPage/fetchArticleList",
 async (_, thunkAPI) => {
  try {
   const response = await thunkAPI.extra.api.get<Article[]>(
    `/articles`,
    {
     params: {
      _expend: "user",
     },
    }
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
