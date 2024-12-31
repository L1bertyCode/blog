import { CounterSchema } from "@/entities/Counter/model/types/counterSchema";
import { UserSchema } from "@/entities/User";
import { LoginSchema } from "@/feature/AuthByUsername";

export interface StateSchema {
  counter: CounterSchema;
  user: UserSchema;
  loginForm: LoginSchema;
}