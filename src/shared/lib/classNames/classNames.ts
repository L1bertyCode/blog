export type Mods = Record<
 string,
 string | boolean | undefined
>;
export const classNames = (
 str: string,
 mods: Mods = {},
 additional: Array<string | undefined> = []
): string => {
 return [
  str,
  ...additional,
  ...Object.entries(mods)
   .filter(([_, valueCls]) => Boolean(valueCls))
   .map(([keyCls, _]) => keyCls),
 ].join(" ");
};
