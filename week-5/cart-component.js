class CartComponent extends HTMLElement {
  constructor() {
    super();
    this.id = Math.random().toString(16).slice(2);
  }

  connectedCallback() {
    this.innerHTML = `
    <i id="cartIcon" class="fa fa-shopping-cart"></i> (<span id="cart-count"></span>)
    `;
  }
}

customElements.define("cart-component", CartComponent);
