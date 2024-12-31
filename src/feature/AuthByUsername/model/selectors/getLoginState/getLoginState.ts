import { StateSchema } from "@/app/providers/StoreProvder";

export const getLoginState = (state: StateSchema) => state?.loginForm;