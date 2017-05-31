import Yeesh from './src/index';
const runOnStart = true;
const get={
  config : () => {},
  loader : () => {},
  scenarios : (args) => {}
};
const set={
  config : (args,root) => {}
};

export default class AppLoader{

}

new Yeesh();