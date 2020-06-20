import _ from 'lodash';

import {
  mkdir, mkfile, getChildren, getName, isFile,
} from './tree-functions';

const getHiddenFilesCount = (tree) => {
  const checkFirstSymbol = getName(tree).slice(0, 1);
  if (isFile(tree)) {
    if (checkFirstSymbol === '.') {
      return 1;
    }
    return 0;
  }

  const children = getChildren(tree);
  const hiddenCount = children.map(getHiddenFilesCount);
  return _.sum(hiddenCount);
};

const tree1 = mkdir('/', [
  mkdir('etc', [
    mkdir('apache'),
    mkdir('nginx', [
      mkfile('.nginx.conf', { size: 800 }),
    ]),
    mkdir('.consul', [
      mkfile('.config.json', { size: 1200 }),
      mkfile('data', { size: 8200 }),
      mkfile('raft', { size: 80 }),
    ]),
  ]),
  mkfile('.hosts', { size: 3500 }),
  mkfile('resolve', { size: 1000 }),
]);

export default getHiddenFilesCount;
console.log(getHiddenFilesCount(tree1));
