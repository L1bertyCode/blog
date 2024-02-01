import {
 StateSchema,
 StoreProvider,
} from "@/app/providers/StoreProvider";
import { artcileDetailsReducer } from "@/entities/Article/model/slice/artcileSlice";
import { profileReducer } from "@/entities/Profile";
import { loginReducer } from "@/features/AuthByUsername";
import { addCommentFormReducer } from "@/features/addCommentForm/model/slices/addCommentFormSlice";
import { articleDetailsCommentsReducer } from "@/pages/ArticleDetailsPage/model/slices/articleDetailsCommentsSlice";
import { ReducersList } from "@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";

import { StoryFn } from "@storybook/react";
const defaultAsyncReducers: ReducersList = {
 loginForm: loginReducer,
 profile: profileReducer,
 articleDetails: artcileDetailsReducer,
 addCommentForm: addCommentFormReducer,
 articleDetailsComments: articleDetailsCommentsReducer,
};
export const StoreDecorator =
 (
  state?: DeepPartial<StateSchema>,
  asyncReducers?: ReducersList
 ) =>
 (Story: StoryFn) => {
  return (
   <StoreProvider
    initialState={state}
    asyncReducers={{
     ...defaultAsyncReducers,
     ...asyncReducers,
    }}
   >
    <Story />
   </StoreProvider>
  );
 };
