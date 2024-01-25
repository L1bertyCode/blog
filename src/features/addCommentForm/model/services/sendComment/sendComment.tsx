import {
 StateSchema,
 ThunkExtraArgs,
} from "@/app/providers/StoreProvider";
import { Comment } from "@/entities/Comment";
import { getUserAuthData } from "@/entities/User";

import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAddCommentFormText } from "../../selectors/addCommentFormSelectors";
import { getArticleDetailsData } from "@/entities/Article";

export const loginByUsername = createAsyncThunk<
 Comment,
 void,
 {
  rejectValue: string;
  extra: ThunkExtraArgs;
  state: StateSchema;
 }
>(
 "addCommentForm/sendComment",
 async (authData, thunkAPI) => {
  const userData = getUserAuthData(thunkAPI.getState());
  const text = getAddCommentFormText(thunkAPI.getState());
  const article = getArticleDetailsData(
   thunkAPI.getState()
  );

  if (!userData || !text || !article) {
   return thunkAPI.rejectWithValue("no data");
  }
  try {
   const response = await thunkAPI.extra.api.post<Comment>(
    "/comments",
    {
     articleId: article.id,
     userId: userData.id,
     text,
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
