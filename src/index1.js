import readlineSync from 'readline-sync';

const welcome = () => {
  console.log('Welcome to the Brain-games!');
  const player = readlineSync.question('May i have your name? ');
  console.log(`Hello, ${player}!`);
  const savePlayer = `${player}!`;
  return savePlayer;
};


export const failMessage = () => console.log(`"Try again, ${welcome()}"`);
export const congrat = () => console.log(`Congratulations, ${welcome()}!`);
failMessage();

export const createPrinter = () => {
  const name = 'King';

  const printName = () => {
    console.log(name);
  };

  return printName;
};
