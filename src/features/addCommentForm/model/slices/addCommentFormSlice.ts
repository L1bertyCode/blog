import {
 createSlice,
 PayloadAction,
} from "@reduxjs/toolkit";
import { AddCommentFormSchema } from "../types/addCommentForm";

const initialState: AddCommentFormSchema = {};
const addCommentFormSlice = createSlice({
 name: "addCommentFormSlice",
 initialState,
 reducers: {
  setText(state, action: PayloadAction<string>) {


   state.text = action.payload;
  },
 },
});
export const { reducer: addCommentFormReducer } =
 addCommentFormSlice;
export const { actions: addCommentFormActions } =
 addCommentFormSlice;
