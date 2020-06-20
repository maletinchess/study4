import {
  getRandom,
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
export default getMaxDivTask;
