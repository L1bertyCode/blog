import { Article, ArticleView } from "@/entities/Article";
import { EntityState } from "@reduxjs/toolkit";

export interface ArticleListPageSchema
 extends EntityState<Article, string | number> {
 isLoading?: boolean;
 error?: string;
 view: ArticleView;
}
