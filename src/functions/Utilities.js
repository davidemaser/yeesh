import {objMapping,objConditions} from './mapping/ObjectMap';

export function regex(str,find,rep){
  let regex;
  regex = new RegExp(find, "g");
  return str.replace(regex, rep);
}

export function splicer(str){
  let obj = {};
  let a = str.split('<bind ')[1].split('</bind>')[0];
  let b = a.split('\n');
  let oArray = [];
  //b[o] contains binding attributes so let's use that
  let c = b[0].indexOf('=') > -1 ? b[0].split('=') : b[0];
  let objName = c[1].replace('<','').replace('>','');
  let objScope = c[0];
  obj[objName] = {};
  obj[objName]['scope'] = objScope;
  b.shift();
  b.map(function(aa){
    aa.length > 0 ? oArray.push(aa) : null;
  });
  obj[objName]['objects'] = {};
  /**@todo go through the array and create an object for each under obj**/
  oArray.map(function(aaa){
    let subObj = aaa.split('<')[1].trim();
    subObj = subObj.indexOf('>') > -1 ? subObj.split('>')[0] : subObj[0];
    subObj = subObj.trim();
    let subObjContent = aaa.split('<')[1].split('>')[1].trim();
    let subObjString = subObj.indexOf(' ') > -1 ? subObj.split(' ')[0] : subObj;
    let subObjParams = subObj.indexOf(' ') > -1 ? subObj.split(' ')[1] : null;
    let subObjParamFormat = subObjParams !== null && subObjParams.indexOf('=') > -1 ? subObjParams.split('=') : null ;
    obj[objName]['objects'][subObjString] = {};
    obj[objName]['objects'][subObjString]['content'] = subObjContent;
    obj[objName]['objects'][subObjString]['params'] = subObjParamFormat !== null ? {} : null;
    subObjParamFormat !== null ? obj[objName]['objects'][subObjString]['params'][subObjParamFormat[0]] = subObjParamFormat[1] : null;
  });
  console.log(obj);
}
export function multiRePlace(str,args){
  /**args format is
  [
    {
      find:'',
      rep:''
    }
  ]
   **/
  if(typeof args === 'object'){
      let a;
      let cleanString = str;
      for(a in args){
        cleanString = regex(cleanString,args[a].find,args[a].rep);
      }
      return cleanString;
  }
}
