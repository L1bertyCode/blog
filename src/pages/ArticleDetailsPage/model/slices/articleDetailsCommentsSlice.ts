import { StateSchema } from "@/app/providers/StoreProvider";
import { Comment } from "@/entities/Comment";
import {
 createEntityAdapter,
 createSlice,
} from "@reduxjs/toolkit";
import { ArticleDetailsCommentsSchema } from "../types/ArticleDetailsCommentsSchema";

const commentsAdapter = createEntityAdapter<Comment>({
 //@ts-ignore
 selectId: (comment: Comment) => comment.id,
});
export const getArticleDetailsComments =
 commentsAdapter.getSelectors<StateSchema>(
  (state) =>
   state.articleDetailsComments ||
   commentsAdapter.getInitialState<ArticleDetailsCommentsSchema>(
    {
     isLoading: false,
     ids: ["1", "2"],
     entities: {
      "1": {
       id: "1",
       text: "some comment",
       user: { id: "1", username: "user" },
      },
      "2": {
       id: "2",
       text: "some comment",
       user: { id: "1", username: "user" },
      },
     },
    }
   )
 );
const articleDetailsCommentsSlice = createSlice({
 name: "articleDetailsComments",
 initialState: commentsAdapter.getInitialState(),
 reducers: {},
});
export const { reducer: articleDetailsCommentsReducer } =
 articleDetailsCommentsSlice;
export const { actions: articleDetailsCommentsActions } =
 articleDetailsCommentsSlice;
