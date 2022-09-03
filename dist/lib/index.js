'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var components = require('engine-ui/lib/components');

function _interopNamespace(e) {
  if (e && e.__esModule) return e;
  var n = Object.create(null);
  if (e) {
    Object.keys(e).forEach(function (k) {
      if (k !== 'default') {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function () { return e[k]; }
        });
      }
    });
  }
  n["default"] = e;
  return Object.freeze(n);
}

var components__namespace = /*#__PURE__*/_interopNamespace(components);

const install = (app) => {
    Object.entries(components__namespace).forEach(([name, component]) => {
        app.component(name, component);
    });
};
var index = {
    install,
};

exports["default"] = index;
Object.keys(components).forEach(function (k) {
  if (k !== 'default' && !exports.hasOwnProperty(k)) Object.defineProperty(exports, k, {
    enumerable: true,
    get: function () { return components[k]; }
  });
});
