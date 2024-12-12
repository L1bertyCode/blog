declare module '*.css';
declare module '*.scss';
declare module "*.module.scss" {
  interface IClasse {
    [className: string]: string;
  }
  const classes: IClasse;
  export = classes;
}
declare module "*.module.css" {
  const classes: { [key: string]: string; };
  export = classes;
}