'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const withInstall = (comp) => {
  comp.install = (app) => {
    app.component(comp.name, comp);
  };
  return comp;
};

exports.withInstall = withInstall;
//# sourceMappingURL=with-install.js.map
