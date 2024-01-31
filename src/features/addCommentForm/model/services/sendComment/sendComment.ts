import {
 StateSchema,
 ThunkExtraArgs,
} from "@/app/providers/StoreProvider";
import { Comment } from "@/entities/Comment";
import { getUserAuthData } from "@/entities/User";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAddCommentFormText } from "../../selectors/getAddCommentFormText/getAddCommentFormText";
import { getArticleDetailsData } from "@/entities/Article";
import { addCommentFormActions } from "../../slices/addCommentFormSlice";

export const sendComment = createAsyncThunk<
 Comment,
 void,
 {
  rejectValue: string;
  extra: ThunkExtraArgs;
  state: StateSchema;
 }
>("sendComment", async (_, thunkAPI) => {
 const userData = getUserAuthData(thunkAPI.getState());
 const text = getAddCommentFormText(thunkAPI.getState());
 const artcile = getArticleDetailsData(thunkAPI.getState());

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

  return response.data;
 } catch (e) {
  return thunkAPI.rejectWithValue("Error");
 }
});
