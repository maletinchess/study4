import _ from 'lodash';

import {
  mkdir, mkfile, getChildren, getName, isFile, isDirectory, getMeta,
} from './tree-functions';

const changeOwner = (tree, owner) => {
  const name = getName(tree);
  const newMeta = _.cloneDeep(getMeta(tree));
  newMeta.owner = owner;

  if (isFile(tree)) {
    return mkfile(name, newMeta);
  }
  const children = getChildren(tree);
  const newChildren = children.map((child) => changeOwner(child, owner));
  return mkdir(name, newChildren, newMeta);
};
export default changeOwner;
const x = mkdir('my documents', [
  mkfile('avatar.jpg', { size: 100 }),
  mkfile('passport.jpg', { size: 200 }),
  mkfile('family.jpg', { size: 150 }),
  mkfile('addresses', { size: 125 }),
  mkdir('presentations'),
]);
console.log(changeOwner(x, 'ps').children);
