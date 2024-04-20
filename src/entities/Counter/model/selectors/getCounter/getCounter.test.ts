import { getCounter } from "./getCounter";

describe("getCounter.test", () => {
 const state = {
  counter: {
   value: 10,
  },
 };
 test("getCounter", () => {
  expect(getCounter(state)).toEqual({ value: 10 });
 });
});
