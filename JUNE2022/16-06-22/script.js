"use strict";

//1

// Write a function that takes an array of strings as an argument and returns a sorted array containing the same strings, ordered from shortest to longest.

// For example, if this array were passed as an argument:

// ["Telescopes", "Glasses", "Eyes", "Monocles"]

// Your function would return the following array:

// ["Eyes", "Glasses", "Monocles", "Telescopes"]

// All of the strings in the array passed to your function will be different lengths, so you will not have to decide how to order multiple strings of the same length.

// function sortByLength(array) {
//   return array.sort((a, b) => a.length - b.length); //sort takes var a, b and then we can use length method on a and b.
// }

// console.log(sortByLength(["Beg", "Life", "I", "To"]));

//2

// All Star Code Challenge #18

// Create a function that accepts 2 string arguments and returns an integer of the count of occurrences the 2nd argument is found in the first one.

// If no occurrences can be found, a count of 0 should be returned.

// ("Hello", "o")  ==>  1
// ("Hello", "l")  ==>  2
// ("", "z")       ==>  0
// Notes:

// The first argument can be an empty string
// The second string argument will always be of length 1

// //my soultion - worked
// function strCount(str, letter) {
//   //code here
//   let counter = 0;
//   const count = str.split(``);
//   for (const n of count) {
//     if (letter === n) {
//       counter++;
//     }
//   }
//   return counter;
// }

// //other users solution
// function strCount(str, letter) {
//   return str.split(letter).length - 1;
// }

// function strCount(str, letter){
//   return str.split('').filter(c => c == letter).length;
// }

//3

// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

//not my solution
// function XO(str) {
//   //code here
//   let x = str.match(/x/gi);
//   let o = str.match(/o/gi);
//   return (x && x.length) === (o && o.length);
// }

// console.log(XO("xxxOo"));

// 4

// In this game, the hero moves from left to right. The player rolls the dice and moves the number of spaces indicated by the dice two times.

// Create a function for the terminal game that takes the current position of the hero and the roll (1-6) and return the new position.

// Example:
// move(3, 6) should equal 15

//my soultion
const move = (position, roll) => position + roll * 2;
