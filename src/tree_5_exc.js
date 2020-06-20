import _ from 'lodash';

import {
  mkdir, mkfile, getChildren, getName, isFile, getMeta,
} from './tree-functions';

const downcaseFileNames = (tree) => {
  const newMeta = _.cloneDeep(getMeta(tree));

  if (isFile(tree)) {
    return mkfile(getName(tree).toLowerCase(), newMeta);
  }

  const children = getChildren(tree);
  const newChildren = children.map((child) => downcaseFileNames(child));
  return mkdir(getName(tree), newChildren, newMeta);
};

const tree1 = mkdir('/', [
  mkdir('eTc', [
    mkdir('NgiNx'),
    mkdir('CONSUL', [
      mkfile('config.json'),
    ]),
  ]),
  mkfile('hOsts'),
]);

console.log(downcaseFileNames(tree1));
export default downcaseFileNames;
