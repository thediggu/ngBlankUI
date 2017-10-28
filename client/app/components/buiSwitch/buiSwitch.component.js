import template from './buiSwitch.html';
import controller from './buiSwitch.controller';
import './buiSwitch.scss';

let buiSwitchComponent = {
  bindings: {
    switchId: "@"
  },
  template,
  controller
};

export default buiSwitchComponent;
