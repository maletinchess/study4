export const mkdir = (name, children = [], meta = {}) => ({
  name,
  meta,
  children,
  type: 'directory',
});

export const mkfile = (name, meta = {}) => ({
  name,
  meta,
  type: 'file',
});

export const getChildren = (directory) => directory.children;

export const getName = (node) => node.name;

export const isFile = (node) => node.type === 'file';

export const isDirectory = (node) => node.type === 'directory';

export const getMeta = (node) => node.meta;
