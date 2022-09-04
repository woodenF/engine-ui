const withInstall = (comp) => {
  comp.install = function(app) {
    app.component(comp.name, comp);
  };
  return comp;
};

export { withInstall };
//# sourceMappingURL=with-install.mjs.map
