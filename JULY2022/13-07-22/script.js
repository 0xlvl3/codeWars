"use strict";

//1
/*
Your boss decided to save money by purchasing some cut-rate optical character recognition software for scanning in the text of old novels to your database. At first it seems to capture words okay, but you quickly notice that it throws in a lot of numbers at random places in the text.

Examples (input -> output)
'! !'                 -> '! !'
'123456789'           -> ''
'This looks5 grea8t!' -> 'This looks great!'
Your harried co-workers are looking to you for a solution to take this garbled text and remove all of the numbers. Your program will take in a string and clean out all numeric characters, and return a string with spacing and special characters ~#$%^&!@*():;"'.,? all intact.
*/
function stringClean(s) {
  // Function will return the cleaned string
  return s.replace(/[0-9]/g, "");
}

//2
/*
Your task is to write function findSum.

Upto and including n, this function will return the sum of all multiples of 3 and 5.

For example:

findSum(5) should return 8 (3 + 5)

findSum(10) should return 33 (3 + 5 + 6 + 9 + 10)

*/
function findSum(n) {
  let result = 0;
  for (let i = 0; i <= n; i++) {
    if (i % 3 === 0 || i % 5 === 0) result += i;
  }
  return result;
}

//3
/*
Find the total sum of internal angles (in degrees) in an n-sided simple polygon. N will be greater than 2.
*/
function angle(n) {
  return Math.trunc((n - 2) * 180);
}

const angle = (n) => (n - 2) * 180;
