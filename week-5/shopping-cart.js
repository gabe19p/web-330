class ShoppingCart {
  constructor() {
    let products = [];

    function count() {
      return products.length;
    }

    function add(productObj) {
      products += productObj;
    }
  }
}
