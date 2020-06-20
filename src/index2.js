const getRandom = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const isEven = (num) => num % 2 === 0;

const even = () => {
  const question = getRandom(-100, 100);
  return [question, isEven(question) ? 'yes' : 'no'];
};

console.log(even());
