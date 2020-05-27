import _ from 'lodash';
const result = _.head([1, 2, 3]);
console.log(result);
console.log(_.uniq([1, 1, 3]));
const x = (coll) => {
  const result = coll.map((item) => Math.sqrt(item));
  return result;
}
console.log(x([25, 16, 9, 4, 1]));
