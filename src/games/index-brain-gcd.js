import {
  getRandomNumber,
  getAnswer,
  questionText,
  getUserName,
  result,
  gg,
} from '../index.js';

// Brain GCD
getUserName();
const brainGcd = () => {
  console.log('Find the greatest common divisor of given numbers.');

  let i = 0;
  while (i < 3) {
    const randomNumber = getRandomNumber();
    const randomNumber2 = getRandomNumber();
    const currentExpression = `${randomNumber} ${randomNumber2}`;
    questionText(currentExpression);
    const userAnswer = getAnswer();
    const answerUnified = Number(userAnswer);

    const expression = (a, b) => {
      if (!b) {
        return a;
      }
      return expression(b, a % b);
    };

    const correctAnswer = expression(randomNumber, randomNumber2);
    const isCorrect = answerUnified === correctAnswer;

    result(isCorrect, userAnswer, correctAnswer);
    if (!isCorrect) {
      return;
    }
    i += 1;
  }
  gg();
};

export default brainGcd;
