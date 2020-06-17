import readlineSync from 'readline-sync';

export const getRandom = (min, max) => {
  const newMin = Math.ceil(min);
  const newMax = Math.floor(max);
  return Math.floor(Math.random() * (newMax - newMin + 1)) + newMin;
};

export const welcomePlayer = () => {
  console.log('Welcome to the Brain-games!');
  const player = readlineSync.question('May i have your name? ');
  console.log(`Hello, ${player}!`);
  const savePlayer = `${player}`;
  return savePlayer;
};

export const taskDescription = (str) => console.log(str);

// example of message if player wins
export const congratMessage = (str) => console.log(`Congratulations, ${str}!`);

// example of message if player fails
export const failMessage = (actual, correct, playerName) => console.log(`"${actual}" is wrong answer ;(. Correct answer was "${correct}". Let's try again, ${playerName}!`);

// greatness
export const greatness = (str) => console.log(`Hello, ${str}!`);

/* here are the constructor-functions for each game. constructor creates an array.
the first element - is an expression, the second - is the correct answer */
export const getCalcTask = () => {
  // example of constructor for calculation-play;
  // get two values from random-function
  const firstValue = getRandom(-100, 100);
  const secondValue = getRandom(-100, 100);
  let operand; // variable to save a sign of operation;
  let result; // variable to save a result of operation;
  // we use switch to organize choice of type of calculation;
  switch (getRandom(1, 3)) {
    case 1:
      operand = '+';
      result = firstValue + secondValue;
      break;
    case 2:
      operand = '-';
      result = firstValue - secondValue;
      break;
    default:
      operand = '*';
      result = firstValue * secondValue;
  }
  // now we have operand and result, so we can construct an expression to string-form;
  const calcTask = []; // prepare array;
  const expression = `${firstValue} ${operand} ${secondValue}`; // construct expression;
  calcTask.push(expression, result.toString()); // correct answer also should be a string-type;
  return calcTask;
};

export const getEvenTask = () => {
  const result = [];
  const value = getRandom(-100, 100);
  result.push(value);
  if (value % 2 === 0) {
    result.push('yes');
  } else {
    result.push('no');
  }
  return result;
};

export const getProgressionTask = () => {
  const getArray = () => {
    const result = [];
    const counter = getRandom(1, 10);
    result.push(getRandom(0, 100));
    for (let i = 0; i < 9; i += 1) {
      result.push(result[i] + counter);
    }
    return result;
  };
  const array = getArray();
  const index = getRandom(0, 9);
  const emptyIndexArray = [];
  const taskArray = [];
  const correctAnswer = array[index];
  for (let i = 0; i < array.length; i += 1) {
    if (i !== index) {
      emptyIndexArray.push(array[i]);
    } else { emptyIndexArray.push('..'); }
  }
  taskArray.push(emptyIndexArray.join(' '), correctAnswer.toString());
  return taskArray;
};

export const getIsPrimeTask = () => {
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

export const getMaxDivisorTask = () => {
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
