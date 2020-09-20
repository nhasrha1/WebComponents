class Tooltip extends HTMLElement {
  constructor(){
    super()
    console.log('in super first');
  }

  connectedCallback() {
    const tooltipIcon = document.createElement('span')
    tooltipIcon.textContent = ' (?)'

    this.appendChild(tooltipIcon)
  }
}


customElements.define('ct-tooltip', Tooltip)
