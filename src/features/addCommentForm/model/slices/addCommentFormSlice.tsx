import { createSlice } from "@reduxjs/toolkit";
import { AddCommentFormSchema } from "../types/addCommentForm";

const initialState: AddCommentFormSchema = {
 text: undefined,
 error: undefined,
};
export const addCommentFormSlice = createSlice({
 name: "addCommentFormSlice",
 initialState,
 reducers: {},
});
