/**
 * Lee el enunciado de esta kata y resuelve el algoritmo.
 *  
 * Kata: https://www.codewars.com/kata/554b4ac871d6813a03000035
 */

function highAndLow(numbers){
  const numbersToExplore = numbers.split(' ').map(Number);
  const minNumber = Math.min(...numbersToExplore);
  const maxNumber = Math.max(...numbersToExplore);
  return `${maxNumber} ${minNumber}`;
  }

console.log(highAndLow("1 2 3 4 5")); // return "5 1"
console.log(highAndLow("1 2 -3 4 5")); // return "5 -3"
console.log(highAndLow("1 9 3 4 -5")); // return "9 -5"
  