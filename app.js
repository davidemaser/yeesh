import Yeesh from './src/index';
import Translate from './src/templates/translators/Translate';
import * as Utilities from './src/functions/Utilities';
export {Utilities};
const Config = {
  templateMapping:'../src/templates/',
  defaultExtension:'yeesh'
};

let a = new Yeesh(`${Config.templateMapping}index.${Config.defaultExtension}`);
let b = a.getTemplate();
console.log(b);