import * as components from 'engine-ui/es/components';
export * from 'engine-ui/es/components';

const install = (app) => {
    Object.entries(components).forEach(([name, component]) => {
        app.component(name, component);
    });
};
var index = {
    install,
};

export { index as default };
