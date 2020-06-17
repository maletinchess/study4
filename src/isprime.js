import readlineSync from 'readline-sync';

import {
  getRandom, welcomePlayer, taskDescription, congrat,
} from './toolbox.js';

// function generate an array, which first element is expression, cecond element - is right answer;
const getIsPrimeTask = () => {
  const primeTask = [];
  const value = getRandom(0, 99);
  primeTask.push(value);
  const isPrime = (num) => {
    if (num < 2) {
      return false;
    }

    for (let i = 2; i <= Math.sqrt(num); i += 1) {
      if (num % i === 0) {
        return false;
      }
    }

    return true;
  };
  if (isPrime(value) === true) {
    primeTask.push('yes');
  } else { primeTask.push('no'); }
  return primeTask;
};

const isPrimePlay = () => {
  welcomePlayer();
  taskDescription('Answer "yes" if the number is prime, otherwise answer "no".');
  const iter = (acc) => {
    const primeTask = getIsPrimeTask();
    const [value, correctAnswer] = primeTask;
    console.log(`Question: ${value}`);
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
isPrimePlay();
