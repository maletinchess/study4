const addItem = (good, count, price) => {
  const result = {};
  result.name = good;
  result.count = count;
  result.price = price;
  return result;
};
export default addItem;
console.log(addItem('cars', 5, 10));
