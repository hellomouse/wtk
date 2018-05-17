import { Component } from './Component';

export class Application extends Component {
  constructor(id = 'wtk-root') {
    super();
    let e = document.getElementById(id);
    e.id = '';
    this.setId(id);
    e.parentNode.replaceChild(this.elem, e);
    this.run();
  }

  addStyles(selector: string, rules: {[key:string]:string}) {
    let sheet = <CSSStyleSheet> window.document.styleSheets[0];
    let out = selector + ' { ';
    for (let name in rules) {
      let value = rules[name];
      out += name + ': ' + value + '; ';
    }
    out += '} ';
    sheet.insertRule(out);
  }

  includeStyles(styles: {[key:string]:{[key:string]:string}}) {
    for (let selector in styles) {
      this.addStyles(selector, styles[selector]);
    }
  }
  
  run() {};
}