import { StateSchema } from "@/app/providers/StoreProvder";

export const getCounter = (state: StateSchema) => state.counter;