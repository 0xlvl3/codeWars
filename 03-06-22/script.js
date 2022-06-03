"use strict";

//1

// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

// Examples
// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"

//couldn't figure this one out..

// function highAndLow(numbers) {
//   numbers.sort();
// }

// function highAndLow(numbers) {
//   numbers = numbers.split(" ").map(Number);
//   return Math.max.apply(0, numbers) + " " + Math.min.apply(0, numbers);
// }

// function highAndLow(numbers) {
//   numbers = numbers.split(" ");
//   return `${Math.max(...numbers)} ${Math.min(...numbers)}`;
// }

// console.log(highAndLow([3, 1, 4, 5]));

//2

// Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

// [10, 343445353, 3453445, 3453545353453] should return 3453455.

//couldn't figure this out either..
// function sumTwoSmallestNumbers(numbers) {
//   numbers = numbers.sort(function (a, b) {
//     return a - b;
//   });
//   return numbers[0] + numbers[1];
// }

// console.log(sumTwoSmallestNumbers([100, 3, 4, 5]));

//3
// Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

// For example:
// //summation(2) -> 3
// 1 + 2

// summation(8) -> 36
// 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8

// var summation = function (num) {
//   let result = 0;
//   for (var i = 1; i <= num; i++) {
//     result += i;
//   }
//   return result;
// };

const summation = (num) => {
  let sum = 0;
  for (let i = 0; i <= num; i++) {
    sum += i;
  }
  return sum;
};

console.log(summation(55));
