import readlineSync from 'readline-sync';

import {
  welcomePlayer, taskDescription, congrat, getEvenTask,
} from './toolbox.js';

const evenPlay = () => {
  welcomePlayer();
  taskDescription('Answer "yes" if the number is even, otherwise answer "no".');
  const iter = (acc) => {
    const expression = getEvenTask();
    const [num, correctAnswer] = expression;
    console.log(`Question: ${num}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer !== correctAnswer) {
      const failMessage = console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}". Let's try again!`);
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
evenPlay();
