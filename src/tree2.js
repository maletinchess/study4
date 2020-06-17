const tree = (array) => {
  const x = array.filter((item) => Array.isArray(item));
  return x.flat();
};
console.log(tree([1, [2, 3], 4]));
console.log(tree([[5], 1, [3, 4]]));
console.log(tree([1, 2, [3, 5], [[4, 3], 2]]));
