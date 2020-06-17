import readlineSync from 'readline-sync';

import {
  welcomePlayer, taskDescription, congrat, getCalcTask,
} from './toolbox.js';


const calcPlay = () => {
  welcomePlayer();
  taskDescription('What is the result of the expression?');
  const iter = (acc) => {
    const taskCalc = getCalcTask(); // generate task-array;
    const [expression, correctAnswer] = taskCalc;
    // here we use array to generate question and define wright answer;
    console.log(`Question: ${expression}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer !== correctAnswer) {
      const failMessage = console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}"`);
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
calcPlay();
