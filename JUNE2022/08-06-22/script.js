"use strict";

//1

// Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.

// For example: month 2 (February), is part of the first quarter; month 6 (June) is part of the second quarter; and month 11 (November), is part of the fourth quarter.

//my solution - worked
const quarterOf = (month) => {
  // Your code here
  switch (month) {
    case 1:
    case 2:
    case 3:
      return 1;
      break;
    case 4:
    case 5:
    case 6:
      return 2;
      break;
    case 7:
    case 8:
    case 9:
      return 3;
      break;
    case 10:
    case 11:
    case 12:
      return 4;
      break;
    default:
      return `Not a value`;
      break;
  }
};

//other users solutions
// const quarterOf = month => Math.ceil(month / 3);

//2

// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

// Examples:

// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false

//had to see other users solutions for this one
function solution(str, ending) {
  return str.endsWith(ending);
}

//3
// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

//my solution - worked
const even_or_odd = (number) => (number % 2 === 0 ? `Even` : `Odd`);

//4

// Ben has a very simple idea to make some profit: he buys something and sells it again. Of course, this wouldn't give him any profit at all if he was simply to buy and sell it at the same price. Instead, he's going to buy it for the lowest possible price and sell it at the highest.

// Task

// Write a function that returns both the minimum and maximum number of the given list/array.

// Examples(Input --> Output)
// [1,2,3,4,5] --> [1,5]
// [2334454,5] --> [5, 2334454]
// [1]         --> [1, 1]

// Remarks

// All arrays or lists will always have at least one element, so you don't need to check the length. Also, your function will always get an array or a list, you don't have to check for null, undefined or similar.

//my solution - worked - yes looks horrid but got it to work
function minMax(arr) {
  let newArr = arr.sort(function (a, b) {
    return a - b;
  });
  let lowest = newArr[0];
  let highest = newArr[newArr.length - 1];
  let joinedArr = [lowest, highest];
  return joinedArr;
}

//other user solution using Spread Operator
// function minMax(arr) {
//   return [Math.min(...arr), Math.max(...arr)];
// }
