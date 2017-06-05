import Yeesh from './src/index';
import Translate from './src/templates/translators/Translate';
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
console.log(Translate);
new Yeesh();