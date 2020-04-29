class UserCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode : 'open'})
    this.innerHTML = `${this.getAttribute('name')}`;
  }
}

window.customElements.define('user-card' , UserCard)
