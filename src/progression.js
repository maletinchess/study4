import readlineSync from 'readline-sync';

import {
  getRandom, welcomePlayer, taskDescription, congrat,
} from './toolbox.js';

// function generate an array, which first element is expression, cecond element - is right answer;
const getProgressionTask = () => {
  const getArray = () => {
    const result = [];
    const counter = getRandom(1, 10);
    result.push(getRandom(0, 100));
    for (let i = 0; i < 7; i += 1) {
      result.push(result[i] + counter);
    }
    return result;
  };
  const array = getArray();
  const index = getRandom(0, 7);
  const emptyIndexArray = [];
  const taskArray = [];
  const correctAnswer = array[index];
  for (let i = 0; i < array.length; i += 1) {
    if (i !== index) {
      emptyIndexArray.push(array[i]);
    } else { emptyIndexArray.push('..'); }
  }
  taskArray.push(emptyIndexArray, correctAnswer.toString());
  return taskArray;
};

const progressionPlay = () => {
  welcomePlayer();
  taskDescription('What number is missing in this progression?');
  const iter = (acc) => {
    const progression = getProgressionTask(); // generate task-array;
    const [findEmptyNumber, correctAnswer] = progression;
    // here we use array to generate question and define wright answer;
    console.log(`Question: ${[...findEmptyNumber]}`);
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
progressionPlay();
