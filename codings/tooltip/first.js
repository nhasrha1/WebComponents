class Tooltip extends HTMLElement {
  constructor(){
    super()
    const tooltipIcon = document.createElement('span')
    tooltipIcon.textContent = ' (?)'

    this.appendChild(tooltipIcon)
    console.log('in super first');
  }
}

customElements.define('ct-tooltip', Tooltip)