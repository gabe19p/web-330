export class ShoppingCart {
  constructor() {
    let products = [];

    function count() {
      return products.length;
    }

    function add(product) {
      products += product;
    }

    function* loop() {
      for (const product of products) {
        yield product;
      }
    }
  }
}
