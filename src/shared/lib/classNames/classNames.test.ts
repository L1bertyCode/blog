import { classNames } from "./classNames";

describe("classNames", () => {
 test("with first params", () => {
  expect(classNames("someClass")).toBe("someClass");
 });

 test("with additional class", () => {
  expect(
   classNames("someClass", {}, ["additionalClass"])
  ).toBe("someClass additionalClass");
 });

 test("with mods", () => {
  expect(
   classNames("someClass", { hovered: true, red: false }, [
    "additionalClass",
   ])
  ).toBe("someClass additionalClass hovered");
 });

 test("with undefined", () => {
  expect(
   classNames(
    "someClass",
    { hovered: true, red: undefined },
    ["additionalClass"]
   )
  ).toBe("someClass additionalClass hovered");
 });
});
