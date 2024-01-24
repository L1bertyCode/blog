import { ThunkExtraArgs } from "@/app/providers/StoreProvider";

import { createAsyncThunk } from "@reduxjs/toolkit";
import { Profile } from "../../types/profile";

export const fetchProfileData = createAsyncThunk<
 Profile,
 string,
 { rejectValue: string; extra: ThunkExtraArgs }
>(
 "profile/fetchProfileData",
 async (profileId, thunkAPI) => {
  try {
   const response = await thunkAPI.extra.api.get<Profile>(
    `profile/${profileId}`
   );
   if (!response.data) {
    throw new Error();
   }
   return response.data;
  } catch (e) {
   console.log(e);
   return thunkAPI.rejectWithValue("Error");
  }
 }
);
