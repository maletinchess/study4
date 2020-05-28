import _ from 'lodash';
const check = _.without([1, 2, 3, 3, 2], 2);
console.log(check);
const check2 = _.without([], 2);
console.log(check2)
const check3 = _.without([3, 4, 5]);
console.log(check3);
