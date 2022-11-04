export default class AddToDataBtn {
  constructor({ selector, hidden = false }) {
    this.refs = this.getRefs(selector);
    hidden && this.hidden();
  }

  getRefs(selector) {
    const refs = {};
    refs.button = document.querySelector(selector);
    return refs;
  }
}
