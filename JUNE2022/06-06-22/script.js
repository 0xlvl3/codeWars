"use strict";

//1

// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

//my solution - worked
// function findShort(s) {
//   let arr = s.split(` `);
//   arr.sort((a, b) => a.length - b.length);
//   return arr[0].length;
// }

// console.log(findShort(`bitcoin take over the world maybe who knows perhaps`));

//2

// You might know some pretty large perfect squares. But what about the NEXT one?

// Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.

// If the parameter is itself not a perfect square then -1 should be returned. You may assume the parameter is non-negative.

// Examples:(Input --> Output)

// 121 --> 144
// 625 --> 676
// 114 --> -1 since 114 is not a perfect square

//not my solution couldn't figure it out
// function findNextSquare(sq) {
//   return Math.sqrt(sq) % 1 ? -1 : Math.pow(Math.sqrt(sq) + 1, 2);
// }

//3

// Your task is to create the functionisDivideBy (or is_divide_by) to check if an integer number is divisible by both integers a and b.

// A few cases:

// (-12, 2, -6)  ->  true
// (-12, 2, -5)  ->  false

// (45, 1, 6)    ->  false
// (45, 5, 15)   ->  true

// (4, 1, 4)     ->  true
// (15, -5, 3)   ->  true

//my solution - worked
// function isDivideBy(number, a, b) {
//   // good luck
//   let output;
//   if (number % a === 0 && number % b === 0) {
//     output = true;
//   } else output = false;
//   return output;
// }

// console.log(isDivideBy(-12, 2, -6));

// //could of used a arrow function as an expression
// let isDivideBy = (number, a, b) => {
//   if (number % a === 0 && number % b === 0) {
//     return true
//   } else {
//     return false
//   }
// };
