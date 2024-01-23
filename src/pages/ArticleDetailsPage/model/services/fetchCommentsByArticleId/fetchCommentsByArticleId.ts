import { ThunkExtraArgs } from "@/app/providers/StoreProvider";
import { Comment } from "@/entities/Comment";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchCommentsByArticleId = createAsyncThunk<
 Comment[],
 string | undefined,
 { rejectValue: string; extra: ThunkExtraArgs }
>(
 "articleDetailsPage/fetchCommentsByArticleId",
 async (articleId, thunkAPI) => {
  if (!articleId) {
   return thunkAPI.rejectWithValue("error");
  }
  try {
   const response = await thunkAPI.extra.api.get<Comment[]>(
    `/comments`,
    {
     params: {
      articleId,
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
