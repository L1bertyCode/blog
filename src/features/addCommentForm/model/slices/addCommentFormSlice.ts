import {
 PayloadAction,
 createSlice,
} from "@reduxjs/toolkit";
import { addCommentFormSchema } from "../types/addCommentForm";

const initialState: addCommentFormSchema = {
 text: undefined,
};

export const addCommentFormSlice = createSlice({
 name: "addCommentFormSlice",
 initialState,
 reducers: {
  setText: (state, action: PayloadAction<string>) => {
   state.text = action.payload;
  },
 },
//  extraReducers: (builder) => {
//   builder.addCase(loginByUsername.pending, (state) => {
//    state.error = undefined;
//    state.isLoading = true;
//   });
//   builder.addCase(
//    loginByUsername.rejected,
//    (state, action) => {
//     state.isLoading = false;
//     state.error = action.payload;
//    }
//   );
//   builder.addCase(
//    loginByUsername.fulfilled,
//    (state, action) => {
//     state.isLoading = false;
//    }
//   );
//  },
});

export const { actions: addCommentFormActions } =
 addCommentFormSlice;
export const { reducer: addCommentFormReducer } =
 addCommentFormSlice;
