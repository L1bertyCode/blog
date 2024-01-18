import { StateSchema } from "@/app/providers/StoreProvider";
import { getArticleDetailsIsLoading } from "./getArticleDetailsIsLoading";

describe("getArticleDetailsIsLoading.test", () => {
 test("isLoading true", () => {
  const state: DeepPartial<StateSchema> = {
   articleDetails: { isLoading: true },
  };
  expect(
   getArticleDetailsIsLoading(state as StateSchema)
  ).toEqual(true);
 });

 test("should worl with empty state", () => {
  const state: DeepPartial<StateSchema> = {};
  expect(
   getArticleDetailsIsLoading(state as StateSchema)
  ).toEqual(undefined);
 });
});
