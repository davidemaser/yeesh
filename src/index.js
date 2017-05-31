export default class Yeesh{
  constructor(){
    this.conf={
      parse:'html',
      on:{
        error:['log','exit'],
        exit:'quit',
        load:['jquery','parse']
      },
      state:{

      }
    }
  }
  run(){

  }
  assert(hasAuth,needsAuth,canPush){
    this.assertions = {
      hasAuth : hasAuth || true,
      needsAuth : needsAuth ||false,
      canPush : canPush || false
    };
    let __propA = this.propertyIsEnumerable(this.assertions);
    return __propA.hasOwnProperty('auth');
  }
  emit(frequency,origin,destination){

  }
}