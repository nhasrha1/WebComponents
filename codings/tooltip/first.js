class Tooltip extends HTMLElement {
  constructor(){
    super()
    console.log('in super first');
  }
}

customElements.define('ct-tooltip', Tooltip)