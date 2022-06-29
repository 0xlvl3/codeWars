"use strict";

//1
// A child is playing with a ball on the nth floor of a tall building. The height of this floor, h, is known.

// He drops the ball out of the window. The ball bounces (for example), to two-thirds of its height (a bounce of 0.66).

// His mother looks out of a window 1.5 meters from the ground.

// How many times will the mother see the ball pass in front of her window (including when it's falling and bouncing?

// Three conditions must be met for a valid experiment:
// Float parameter "h" in meters must be greater than 0
// Float parameter "bounce" must be greater than 0 and less than 1
// Float parameter "window" must be less than h.
// If all three conditions above are fulfilled, return a positive integer, otherwise return -1.

// Note:
// The ball can only be seen if the height of the rebounding ball is strictly greater than the window parameter.

// Examples:
// - h = 3, bounce = 0.66, window = 1.5, result is 3

// - h = 3, bounce = 1, window = 1.5, result is -1

// (Condition 2) not fulfilled).

// function bouncingBall(h, bounce, window) {
//   const num = -1;
//   if (h > 0 && bounce > 0 && bounce < 1 && window < h) {
//     return Math.round(h * 0.5 * bounce * window);
//   } else {
//     return num;
//   }
// }

// console.log(bouncingBall(3, 0.66, 1.5));

// function bouncingBall(h, bounce, window) {

//     var pass = 0
//     if (h > 0 && bounce > 0 && bounce < 1 && window < h && window > 0) {

//       for (var i = h; i > window; i *= bounce) {
//   //i stands for the highest point the ball reaches after each bounce
//         pass += 2
//   //the function will execute at least once, as i=h, which is > window
//       }
//     }
//     return (pass - 1)
//   //-1 because the function counted the initial passing as 2
//   }

//2

// Issue
// Looks like some hoodlum plumber and his brother has been running around and damaging your stages again.

// The pipes connecting your level's stages together need to be fixed before you receive any more complaints.

// Pipes list is correct when each pipe after the first index is greater (+1) than the previous one, and that there is no duplicates.

// Task
// Given the a list of numbers, return a fixed list so that the values increment by 1 for each index from the minimum value up to the maximum value (both included).

// Example
// Input: 1,3,5,6,7,8 Output: 1,2,3,4,5,6,7,8

function pipeFix(numbers) {
  let newList = [];
  let endNum = numbers.sort((a, b) => a - b).reverse()[0];
  let firstNum = numbers.sort((a, b) => a - b)[0];
  for (let i = firstNum; i <= endNum; i++) {
    newList.push(i);
  }
  return newList;
}

//3

// We want an array, but not just any old array, an array with contents!

// Write a function that produces an array with the numbers 0 to N-1 in it.

// For example, the following code will result in an array containing the numbers 0 to 4:

// arr(5) // => [0,1,2,3,4]
// Note: The parameter is optional. So you have to give it a default value.

const arr = (n) => {
  let arr = [];
  for (let i = 0; i < n; i++) {
    arr.push(i);
  }
  return arr;
};

console.log(arr(10));
