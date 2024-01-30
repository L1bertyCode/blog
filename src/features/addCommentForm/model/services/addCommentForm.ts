import { ThunkExtraArgs } from "@/app/providers/StoreProvider";
import { Comment } from "@/entities/Comment";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const addCommentForm = createAsyncThunk<
 Comment,
 void,
 { rejectValue: string; extra: ThunkExtraArgs }
>("addCommentForm", async (_, thunkAPI) => {
 try {
  const response = await thunkAPI.extra.api.get<Comment>(
   "comments"
  );
  if (!response.data) {
   return thunkAPI.rejectWithValue("Error");
  }

  return response.data;
 } catch (e) {
  return thunkAPI.rejectWithValue("Error");
 }
});
