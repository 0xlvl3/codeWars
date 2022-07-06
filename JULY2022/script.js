"use strict";

//1
// Given an integer as input, can you round it to the next (meaning, "higher") multiple of 5?

// Examples:

// input:    output:
// 0    ->   0
// 2    ->   5
// 3    ->   5
// 12   ->   15
// 21   ->   25
// 30   ->   30
// -2   ->   0
// -5   ->   -5
// etc.
// Input may be any positive or negative integer (including 0).

// You can assume that all inputs are valid integers.

function roundToNext5(n) {
  // ...
  return Math.ceil(n / 5) * 5;
}

//2

// Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.

// Write a function which takes a list of strings and returns each line prepended by the correct number.

// The numbering starts at 1. The format is n: string. Notice the colon and space in between.

// Examples: (Input --> Output)

// [] --> []
// ["a", "b", "c"] --> ["1: a", "2: b", "3: c"]

// var number = function (array) {
//   //your awesome code here
//   const newArray = array.map((val, i) => {
//     return `${i + 1}: ${val}`;
//   });
//   return newArray;
// };

const number = (arr) => arr.map((val, i) => `${i + 1}: ${val}`);

// console.log(number(["a", "b", "c"]));

//3
/*
The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

What if the string is empty? Then the result should be empty object literal, {}.
*/

function count(string) {
  let obj = {};
  string.split("").forEach(function (val) {
    obj[val] ? obj[val]++ : (obj[val] = 1);
  });
  return obj;
}

console.log(count(`aba`));

//4
/*
Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.

The binary number returned should be a string.

Examples:(Input1, Input2 --> Output (explanation)))

1, 1 --> "10" (1 + 1 = 2 in decimal or 10 in binary)
5, 9 --> "1110" (5 + 9 = 14 in decimal or 1110 in binary)
*/

// const addBinary = (a, b) => {
//   let sum = a + b;
//   return parseInt(sum).toString(2);
// };

//parseInt isn't required
const addBinary = (a, b) => parseInt(a + b).toString(2);

console.log(addBinary(4, 10));
