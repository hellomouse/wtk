import { Component } from './Component';

export class StyleSheet extends Component {
  protected styleElem: HTMLStyleElement; 
  protected styleSheet: CSSStyleSheet;  

  constructor() {
    super('style');
    this.elem.appendChild(document.createTextNode(""));
    console.log(this.elem);
    this.styleSheet = <CSSStyleSheet> (<HTMLStyleElement> this.elem).sheet;
  }

  addRules(selector: string, rules: {[key:string]:string}) {
    let out = selector + ' { ';
    for (let name in rules) {
      let value = rules[name];
      out += name + ': ' + value + '; ';
    }
    out += '} ';
    this.styleSheet.insertRule(out);
    console.log(out);
  }
}