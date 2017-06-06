export default class Yeesh{
  constructor(url){
      this.url = url;
  }

  getTemplate() {
    function reqListener () {
      console.log(this.responseText);
      return this.responseText;
    }
    let oReq = new XMLHttpRequest();
    oReq.addEventListener("load", reqListener);
    oReq.open('GET', this.url);
    oReq.send();
  }
}
