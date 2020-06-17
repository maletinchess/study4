import _ from 'lodash';

import {
  mkdir, mkfile, getChildren, getName, isFile, isDirectory, getMeta,
} from './tree-functions';

const arr1 = [1, 2, 3, 4, 5, 6];
const arr2 = arr1.slice().reverse();
console.log(arr2);

const tree = mkdir('/', [mkfile('hexlet.log')], { hidden: true });
console.log(isFile(tree));

const tree3 = mkdir('/', [
  mkfile('oNe'),
  mkfile('Two'),
  mkdir('THREE'),
]);

const children = getChildren(tree3);
const newChildren = children.map((child) => {
  const name = getName(child);
  const newMeta = _.cloneDeep(getMeta(child));
  if (isDirectory(child)) {
    return mkdir(name.toLowerCase(), getChildren(child), newMeta);
  }
  return mkfile(name.toLowerCase(), newMeta);
});
const newMeta = _.cloneDeep(getMeta(tree3));
const tree4 = mkdir(getName(tree3), newChildren, newMeta);
console.log(tree4);

const tree5 = mkdir('/', [
  mkfile('one'),
  mkfile('two'),
  mkdir('three'),
]);

const children5 = getChildren(tree);
const newChildren5 = children5.filter(isDirectory);
const newMeta5 = _.cloneDeep(getMeta(tree5));
const tree51 = mkdir(getName(tree5), newChildren5, newMeta5);

console.log(tree51);
