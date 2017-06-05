/**
 * Created by David Maser on 05/06/2017.
 */
import Translate from '../templates/translators/Translate';

const GoYeesh = {
  _getTemplate(url, callback) {
    let xhr = new XMLHttpRequest();
    xhr.onload = function () {
      callback(this.responseText)
    };
    xhr.open('GET', url, true);
    xhr.send();
  }
};

export function GetYeesh(url, callback) {
  GoYeesh._getTemplate(url, data => callback(data));
}