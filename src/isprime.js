import {
  getRandom,
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
export default getIsPrimeTask;
