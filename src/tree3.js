import { mkdir, mkfile } from './tree-functions';

// BEGIN (write your solution here)
const generate = () => mkdir('nodejs-package', [
  mkfile('Makefile'),
  mkfile('README.md'),
  mkdir('dist'),
  mkdir('__tests__', [
    mkfile('half.test.js', { type: 'text/javascript' }),
  ]),
  mkfile('babel.config.js', { type: 'text/javascript' }),
  mkdir('node_modules', [
    mkdir('@babel', [
      mkdir('cli', [
        mkfile('LICENSE'),
      ]),
    ]),
  ], { owner: 'root', hidden: false })], { hidden: true });
console.log(generate());
