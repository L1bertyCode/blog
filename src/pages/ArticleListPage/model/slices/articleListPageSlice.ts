import { StateSchema } from "@/app/providers/StoreProvider";
import { Article, ArticleView } from "@/entities/Article";
import {
 EntityId,
 PayloadAction,
 createEntityAdapter,
 createSlice,
} from "@reduxjs/toolkit";
import { ArticleListPageSchema } from "../types/articleListPageSchema";

const articlesAdapter = createEntityAdapter<
 Article,
 EntityId
>({
 selectId: (article: Article) => article.id,
});
export const getArticleList =
 articlesAdapter.getSelectors<StateSchema>(
  (state) =>
   state.articleListPage ||
   articlesAdapter.getInitialState()
 );
export const articleListPageSlice = createSlice({
 name: "articleListPage",
 initialState:
  articlesAdapter.getInitialState<ArticleListPageSchema>({
   isLoading: false,
   ids: [],
   entities: {},
   view: ArticleView.SMALL,
  }),
 reducers: {
  setView: (state, action: PayloadAction<ArticleView>) => {
   state.view = action.payload;
  },
 },
});
export const {
 actions: articleListPageActions,
 reducer: articleListPageReducer,
} = articleListPageSlice;
