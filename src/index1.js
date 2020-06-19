import readlineSync from 'readline-sync';

const getRandom = (min, max) => {
  const newMin = Math.ceil(min);
  const newMax = Math.floor(max);
  return Math.floor(Math.random() * (newMax - newMin + 1)) + newMin;
};

const playFlow = (description, cb) => {
  console.log('Welcome to the Brain games!');
  const player = readlineSync.question('May i have your name? ');
  const savePlayer = `${player}`;
  console.log(description);
  const iter = (acc) => {
    const task = cb();
    const [expression, correctAnswer] = task;
    console.log(`Question: ${expression}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer !== correctAnswer) {
      return console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}"`);
    }
    if (acc === 3) {
      return console.log(`Congratulations, ${savePlayer}!`);
    }
    console.log('Correct!');
    return iter(acc + 1);
  };
  return iter(1);
};
const even = () => {
  const question = getRandom(-100, 100);
  return [question, (question % 2 === 0) ? 'yes' : 'no'];
};
playFlow('Is even', even);
