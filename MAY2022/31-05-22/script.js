"use strict";
//  31 / 05 / 22

// Code wars practice
// ---------------------

//1
//-----------------

// Write a function which calculates the average of the numbers in a given list.

//     Note: Empty arrays should return 0.

//my solution - worked
const find_average = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  if (sum === 0) return 0;
  else return sum / arr.length;
};

//condensed solution
// var find_average = (array) => {
//   return array.length === 0
//     ? 0
//     : array.reduce((acc, ind) => acc + ind, 0) / array.length;
// };

//2
//-----------------------
// You're writing code to control your town's traffic lights. You need a function to handle each change from green, to yellow, to red, and then to green again.

// Complete the function that takes a string as an argument representing the current state of the light and returns a string representing the state the light should change to.

// For example, update_light('green') should return 'yellow'.

// Note: Use "" instead of '' in C++.

//my solution - worked
const updateLight = (current) => {
  current.toLowerCase();
  switch (current) {
    case "green":
      return "yellow";
      break;
    case "yellow":
      return "red";
      break;
    case "red":
      return "green";
      break;
    default:
      return "red";
      break;
  }
};

//condensed solution
// const updateLight = current => ({
//   green: 'yellow',
//   yellow: 'red',
//   red: 'green',
// })[current]

//3
//----------------------

// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.

//my solution - worked
const squareSum = (numbers) => {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i] ** 2;
  }
  return sum;
};

//condensed solution
// function squareSum(numbers){
//   return numbers.reduce(function(sum, n){
//     return (n*n) + sum;
//   }, 0)
// }

//4
//----------------

// Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.

function boolToWord(bool) {
  return bool ? "Yes" : "No";
}
