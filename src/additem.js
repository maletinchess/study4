const cart = {};

const addItem = (name, price, count) => {
  cart.good = { name, price, count };
  cart.good.name = name;
  cart.good.price = price;
  cart.good.count = count;
};
addItem('cars', 50, 20);
addItem('house', 200, 3);
console.log(cart);
