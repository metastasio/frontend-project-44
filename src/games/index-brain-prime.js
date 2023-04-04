import {
  getRandomNumber,
  getAnswer,
  questionText,
  result,
  gg,
} from '../index.js';

// BRAIN PRIME

const brainPrime = () => {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  let i = 0;
  while (i < 3) {
    const randomNumber = getRandomNumber();
    questionText(randomNumber);
    const answer = getAnswer();
    const answerUnified = answer.toLowerCase();
    const isPrime = (num) => {
      for (let j = 2, k = Math.sqrt(num); j <= k; j++) {
        if (num % j === 0) return false;
      }
      return num > 1;
    };
    const correctAnswer = isPrime(randomNumber) ? 'yes' : 'no';
    const isCorrect = answerUnified === correctAnswer;

    result(isCorrect, answerUnified, correctAnswer);
    if (!isCorrect) {
      return;
    }
    i++;
  }
  gg();
};

export default brainPrime;
