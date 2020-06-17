import readlineSync from 'readline-sync';

import {
  getRandom, welcomePlayer, taskDescription, congrat,
} from './toolbox.js';

const getMaxDivTask = () => {
  const result = [];
  const getMaxDivisor = (firstNum, secondNum) => {
    if (firstNum === 0 || secondNum === 0) {
      return null;
    }
    const iter = (acc) => {
      if (firstNum % acc === 0 && secondNum % acc === 0) {
        return acc;
      }
      return iter(acc - 1);
    };
    if (firstNum >= secondNum) {
      return iter(firstNum);
    } return iter(secondNum);
  };
  const firstValue = getRandom(0, 100);
  const secondValue = getRandom(0, 100);
  const maxDivisor = getMaxDivisor(firstValue, secondValue);
  result.push(firstValue, secondValue, maxDivisor.toString());
  return result;
};

const maxDivisorPlay = () => {
  welcomePlayer();
  taskDescription('Find max divisor for two values');
  const iter = (acc) => {
    const maxDivisorTask = getMaxDivTask();
    const [first, second, correctAnswer] = maxDivisorTask;
    console.log(`Question: ${first}, ${second}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer !== correctAnswer) {
      const failMessage = console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}". Try again!`);
      return failMessage;
    }
    if (acc === 3) {
      return congrat();
    }
    console.log('Correct!');
    return iter(acc + 1);
  };
  return iter(1);
};
maxDivisorPlay();
