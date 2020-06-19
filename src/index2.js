import readlineSync from 'readline-sync';

const getRandom = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const even = () => {
  const question = getRandom(-100, 100);
  return [question, (question % 2 === 0) ? 'yes' : 'no'];
};
console.log(even());
