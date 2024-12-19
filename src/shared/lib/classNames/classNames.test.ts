import { classNames } from "@/shared/lib/classNames/classNames";

describe("classNames", () => {
  test("with only firts param", () => {
    expect(classNames("classNames")).toBe("classNames");
  });

  test("with additional class", () => {
    const expected = "classNames class1 class2";
    expect(classNames("classNames", {}, ["class1", "class2"])).toBe(expected);
  });


  test("with mods", () => {
    const expected = "classNames class1 class2 hovered scrollable";
    expect(classNames("classNames", { hovered: true, scrollable: true }, ["class1", "class2"])).toBe(expected);
  });


  test("with mods false", () => {
    const expected = "classNames class1 class2 hovered scrollable";
    expect(classNames("classNames", { hovered: true, scrollable: true, color: false }, ["class1", "class2"])).toBe(expected);
  });

  test("with mods undefined", () => {
    const expected = "classNames class1 class2 hovered scrollable";
    expect(classNames("classNames", { hovered: true, scrollable: true, color: undefined }, ["class1", "class2"])).toBe(expected);
  });
});