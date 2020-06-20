import _ from 'lodash';

import {
  mkdir, mkfile, getChildren, getName, isFile, getMeta,
} from './tree-functions';

const x = mkdir('my documents', [
  mkfile('avatar.jpg', { size: 100 }),
  mkfile('passport.jpg', { size: 200 }),
  mkfile('family.jpg', { size: 150 }),
  mkfile('addresses', { size: 125 }),
  mkdir('presentations'),
]);

const compressImages = (tree) => {
  const children = getChildren(tree);
  const newChildren = children.map((child) => {
    const name = getName(child);
    const newMeta = _.cloneDeep(getMeta(child));
    if (isFile(child) && child.name.slice(child.name.length - 3) === 'jpg') {
      newMeta.size = getMeta(child).size / 2;
      return mkfile(name, newMeta);
    }
    return child;
  });
  const newMeta = _.cloneDeep(getMeta(tree));
  const resultTree = mkdir(getName(tree), newChildren, newMeta);
  return resultTree;
};
console.log(x.children);
console.log(compressImages(x).children);
export default compressImages;
