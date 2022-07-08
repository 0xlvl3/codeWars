"use strict";

//1
/*
Implement a function that accepts 3 integer values a, b, c. The function should return true if a triangle can be built with the sides of given length and false in any other case.

(In this case, all triangles must have surface greater than 0 to be accepted).
*/

// function isTriangle(a, b, c) {
//   if ((a + b + c) / 2 === 0) return true;
//   else false;
// }

function isTriangle(a, b, c) {
  return a + b > c && a + c > b && c + b > a;
}

//2
/*
You will be given an array and a limit value. You must check that all values in the array are below or equal to the limit value. If they are, return true. Else, return false.

You can assume all values in the array are numbers.


*/

// function smallEnough(a, limit) {
//   a.reduce((acc, val) => (acc + val <= limit ? true : false));
// }

// const smallEnough = (a, limit) =>
//   a.reduce((acc, val) => (acc += val >= limit ? true : false));

// const smallEnough = (a, limit) => {
//   let bool = true;
//   a.forEach((val) => {
//     if (val <= limit) return bool;
//     else return !bool;
//   });
// };

// const smallEnough = (a, limit) => {
//   a.filter((val) => (val <= limit));
// };

// const smallEnough = function (a, limit) {
//   const newArr = a.filter(([x, y]) => {
//     if (x <= y) return true;
//     else return false;
//   });
//   return newArr;
// };
// console.log(smallEnough([66, 101], 200));

function smallEnough(array, limit) {
  return array.filter((value) => value > limit).length > 0 ? false : true;
}

//3
/*
Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.

Rules for a smiling face:

Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
Every smiling face must have a smiling mouth that should be marked with either ) or D
No additional characters are allowed except for those mentioned.

Valid smiley face examples: :) :D ;-D :~)
Invalid smiley faces: ;( :> :} :]

Example
countSmileys([':)', ';(', ';}', ':-D']);       // should return 2;
countSmileys([';D', ':-(', ':-)', ';~)']);     // should return 3;
countSmileys([';]', ':[', ';*', ':$', ';-D']); // should return 1;
*/
function countSmileys(arr) {
  return arr.filter((x) => /^[:;][-~]?[)D]$/.test(x)).length;
}

console.log(countSmileys([":)", ";(", ";}", ":-D"]));
