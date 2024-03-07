import { StateSchema } from "@/app/providers/StoreProvider";
import { Article, ArticleView } from "@/entities/Article";
import {
 EntityId,
 PayloadAction,
 createEntityAdapter,
 createSlice,
} from "@reduxjs/toolkit";
import { ArticleListPageSchema } from "../types/articleListPageSchema";
import { fetchArticleList } from "../services/fetchArticleList/fetchArticleList";

const articlesAdapter = createEntityAdapter<
 Article,
 EntityId
>({
 selectId: (article: Article) => article.id,
});
export const getArticlesList =
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
 reducers: {},
 extraReducers: (builder) => {
  builder.addCase(fetchArticleList.pending, (state) => {
   state.error = undefined;
   state.isLoading = true;
  });
  builder.addCase(
   fetchArticleList.rejected,
   (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
   }
  );
  builder.addCase(
   fetchArticleList.fulfilled,
   (state, action: PayloadAction<Article[]>) => {
    state.isLoading = false;
    articlesAdapter.setAll(state, action.payload);
   }
  );
 },
});
export const {
 actions: articleListPageActions,
 reducer: articleListPageReducer,
} = articleListPageSlice;
