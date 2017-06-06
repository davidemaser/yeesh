export function regex(str,find,rep){
  let regex;
  regex = new RegExp(find, "g");
  return str.replace(regex, rep);
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
