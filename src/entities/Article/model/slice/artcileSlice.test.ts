import { StateSchema } from "@/app/providers/StoreProvider";
import { fetchArticleById } from "../services/fetchArticleById";
import { artcileDetailsReducer } from "./artcileSlice";
import { ArticleDetailsSchema } from "../types/articleDitailsSchema";

describe("artcileSlice", () => {
 test("test fetchArticleById pending", () => {
  const state: DeepPartial<ArticleDetailsSchema> = {
   isLoading: false,
   error: "error",
   data: undefined,
  };
  expect(
   artcileDetailsReducer(
    state as ArticleDetailsSchema,
    fetchArticleById.pending("", "")
   )
  ).toEqual({
   isLoading: true,
   error: undefined,
   data: undefined,
  });
 });
});
