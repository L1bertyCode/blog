type Mods = Record<string, string | boolean | undefined>;
export const classNames = (
 str: string,
 mods: Mods,
 additional: Array<string>
): string => {
 return [
  str,
  ...additional,
  ...Object.entries(mods)
   .filter(([keyCls, valueCls]) => Boolean(valueCls))
   .map(([keyCls, valueCls]) => keyCls),
 ].join(" ");
};
