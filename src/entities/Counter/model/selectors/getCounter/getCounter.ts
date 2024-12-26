import { StateSchema } from "@/app/providers/StoreProvder/config/StateSchema";
import { useSelector } from "react-redux";

export const getCounter = useSelector((state: StateSchema) => state.counter);