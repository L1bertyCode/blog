import { StateSchema } from "@/app/providers/StoreProvider";
import { ArticleView } from "@/entities/Article";

export const getArticleListPageIsLoading = (
 state: StateSchema
) => state.articleListPage?.isLoading || false;
export const getArticleListPageError = (
 state: StateSchema
) => state.articleListPage?.error;
export const getArticleListPageView = (
 state: StateSchema
) => state.articleListPage?.view || ArticleView.SMALL;
