import {
 StateSchema,
 ThunkExtraArgs,
} from "@/app/providers/StoreProvider";
import { getArticleDetailsData } from "@/entities/Article";
import { Comment } from "@/entities/Comment";
import { getUserAuthData } from "@/entities/User";


import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchCommentsByArticleId } from "../fetchCommentsByArticleId/fetchCommentsByArticleId";
import { addCommentFormActions } from "@/features/addCommentForm/model/slices/addCommentFormSlice";

export const addCommetnForArticle = createAsyncThunk<
 Comment,
 string,
 {
  rejectValue: string;
  extra: ThunkExtraArgs;
  state: StateSchema;
 }
>(
 "articleDetails/addCommetnForArticle",
 async (text, thunkAPI) => {
  const userData = getUserAuthData(thunkAPI.getState());
  const artcile = getArticleDetailsData(
   thunkAPI.getState()
  );

  if (!userData || !text || !artcile) {
   return thunkAPI.rejectWithValue("No data");
  }
  try {
   const response = await thunkAPI.extra.api.post<Comment>(
    "comments",
    {
     id: artcile.id + Date.now(),
     text,
     user: {
      id: userData.id,
      username: userData.username,
     },
    }
   );
   if (!response.data) {
    return thunkAPI.rejectWithValue("Error");
   }

   thunkAPI.dispatch(addCommentFormActions.setText(""));
   thunkAPI.dispatch(fetchCommentsByArticleId(artcile.id));
   return response.data;
  } catch (e) {
   return thunkAPI.rejectWithValue("Error");
  }
 }
);
