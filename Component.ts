import { StyleSheet } from './StyleSheet';

export class Component {
  elem: HTMLElement;
  
  constructor(name = 'div') {
    this.elem = document.createElement(name);
    (<any> this.elem).wtk_component = this;
  }

  add(other) {
    if (other instanceof HTMLElement) {
      this.elem.appendChild(other);
    } else if (other instanceof Component) {
      this.elem.appendChild(other.elem);
    }
  }

  addClass(name) {
    this.elem.classList.add(name);
  }

  removeClass(name) {
    this.elem.classList.remove(name);
  }

  hasClass(name): boolean {
    return this.elem.classList.contains(name);
  }

  setId(id) {
    this.elem.id = id;
  }

  on(ename: string, handler) {
    this.elem.addEventListener(ename, handler);
  }
}