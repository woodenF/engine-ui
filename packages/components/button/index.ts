import { App, Plugin } from 'vue';
import button from './src/button';

type SFCWithInstall<T> = T & Plugin;

const withInstall = <T>(comp: T) => {
  (comp as SFCWithInstall<T>).install = (app: App) => {
    app.component((comp as any).name, comp);
  };
  return comp as SFCWithInstall<T>;
};

const Button = withInstall(button);

export default Button;
