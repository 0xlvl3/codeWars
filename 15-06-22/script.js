"use strict";

//1

// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

// Examples
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

// function reverseWords(str) {
//   // Go for it
//   let revStr = ``;
//   for (let i = str.length - 1; i >= 0; i--) {
//     revStr += str[i];
//   }
//   return revStr;
// }

// console.log(reverseWords("double  spaced  words"));

// function reverseWords(str) {
//   // Go for it
//   //split words into seperate arrays
//   return str.split("").reverse().join("").split(" ").reverse().join(" ");
// }

// function reverseWords(str) {
//   return str.split(' ').map(function(word){
//     return word.split('').reverse().join('');
//   }).join(' ');
// }

//2

// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

// Note: The function accepts an integer and returns an integer

// function squareDigits(num) {
//   return Number(
//     ("" + num) //create string
//       .split("") //split to array
//       .map(function (val) {
//         //map each val of array
//         return val * val;
//       })
//       .join("") //rejoin for final return
//   );
// }

// console.log(squareDigits(123123));

//3

// It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.

function removeChar(str) {
  const newStr = str.split(``);
  const newArr = newStr.slice(1, -1).join(``);
  return newArr;
} //slice is a string and array method for next time

// function removeChar(str) {
//   return str.slice(1, -1);
// }

console.log(removeChar(`heyhery`));
