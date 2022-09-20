import { withInstall } from '@engine-ui/utils';
import button from './src/button.vue';
import buttonGroup from './src/button-group.vue';

const Button = withInstall(button);
const ButtonGroup = withInstall(buttonGroup);

export {
  Button,
  ButtonGroup
};

export default Button;
