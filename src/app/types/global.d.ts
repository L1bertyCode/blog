declare module "*.svg" {
  const content: React.FC<React.SVGAttributes<SVGElement>>;
  export default content;
}
declare module "*.png";
declare module "*.jpg";
declare module "*.jpeg";
declare module "*.woff";
declare module "*.woff2";

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