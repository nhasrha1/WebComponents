class ConfirmLink extends HTMLAnchorElement {
  connectedCallback() {
    this.addEventListener('click', event => {
      if(!confirm('Do you really want to naviagte')) {
        event.preventDefault();
      }
    })
  }
}

customElements.define('ct-confirm-link', ConfirmLink, {extends: 'a'})