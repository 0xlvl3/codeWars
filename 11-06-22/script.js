"use strict"

//1

// Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.

// Examples
// Input: [1, 5.2, 4, 0, -1]
// Output: 9.2

// Input: []
// Output: 0

// Input: [-2.398]
// Output: -2.398

// Assumptions
// You can assume that you are only given numbers.
// You cannot assume the size of the array.
// You can assume that you do get an array and if the array is empty, return 0.
// What We're Testing
// We're testing basic loops and math operations. This is for beginners who are just learning loops and math operations.
// Advanced users may find this extremely easy and can easily write this in one line.

// Sum Numbers
// sum = function (numbers) {
//   "use strict";
//   let total = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     total += numbers[i];
//   }
//   return total;
// };

//reduce takes elements from teh left of teh arrays one by one, each time "merges" them with initial value by a function
// const anotherSum = num => num.reduce((a, b) => a + b, 0);

// (a,b)=>a+b //Given argument a and b, calculate and return a+b
// [1,2,3,4].reduce((a, b) => a + b, 0);
// (0),1,2,3,4
// =>
// (0+1),2,3,4
// =>
// (1),2,3,4
// =>
// (1+2),3,4
// =>
// (3),3,4
// ...
// (6),4
// =>
// 10

//2 
// The Western Suburbs Croquet Club has two categories of membership, Senior and Open. They would like your help with an application form that will tell prospective members which category they will be placed.

// To be a senior, a member must be at least 55 years old and have a handicap greater than 7. In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.

// Input
// Input will consist of a list of pairs. Each pair contains information for a single potential member. Information consists of an integer for the person's age and an integer for the person's handicap.

// Output
// Output will consist of a list of string values (in Haskell and C: Open or Senior) stating whether the respective member is to be placed in the senior or open category.

// Example
// input =  [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]
// output = ["Open", "Open", "Senior", "Open", "Open", "Senior"]

function openOrSenior(data) {
  return data.map(([age, handicap]) => (age > 54 && handicap > 7) ? `Senior` : `Open`)
}

//3

// In a small town the population is p0 = 1000 at the beginning of a year.The population regularly increases by 2 percent per year and moreover 50 new inhabitants per year come to live in the town.How many years does the town need to see its population greater or equal to p = 1200 inhabitants ?

//   At the end of the first year there will be:
// 1000 + 1000 * 0.02 + 50 => 1070 inhabitants

// At the end of the 2nd year there will be:
// 1070 + 1070 * 0.02 + 50 => 1141 inhabitants(** number of inhabitants is an integer **)

// At the end of the 3rd year there will be:
// 1141 + 1141 * 0.02 + 50 => 1213

// It will need 3 entire years.

function nbYear(p0, percent, aug, p) {
  // your code
  let years = 0;
  while (p0 <= p) {
    p0 += Math.floor(p0 * (percent / 100) + aug); //had to return non fractional
    years++;
  }
  return years;
}

//4

// Implement a function which convert the given boolean value into its string representation.

// Note: Only valid inputs will be given.

const booleanToString = b => b === true ? `true` : `false`;