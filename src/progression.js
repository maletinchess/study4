import {
  getRandom,
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

export default getProgressionTask;
