import { User } from "@/entities/User";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
interface LoginByUsernameProps {
  username: string;
  password: string;
}
export const loginByUsername = createAsyncThunk<User, LoginByUsernameProps>(
  "login/loginByUsername", async ({ username, password }) => {
    const responce = await axios.post("http://localhost:8000/login", {
      username, password
    });

    return responce.data;
  });