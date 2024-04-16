import { StateSchema } from "@/app/providers/StoreProvider/config/StateSchema";

export const getCountValue = (state: StateSchema) =>
 state.counter.value;
