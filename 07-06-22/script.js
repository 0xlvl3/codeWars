"use strict";

//1

// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

// Examples (Input -> Output):
// * "String"      -> "SSttrriinngg"
// * "Hello World" -> "HHeelllloo  WWoorrlldd"
// * "1234!_ "     -> "11223344!!__  "

//my solution - worked
function doubleChar(str) {
  let firstArr = str.split(``);
  let secondArr = str.split(``);
  let finalArr = [];
  for (let i = 0; i < str.length; i++) {
    finalArr.push(firstArr[i] + secondArr[i]);
    finalArr.join("");
    // console.log(firstArr);
    // console.log(secondArr);
    console.log(finalArr.join(""));
    // expected output: "FireAirWater"
  }
  console.log(finalArr.join(``));
  return finalArr.join(``);
}

//other users solution

// function doubleChar(str) {
//     var word = '';
//     for (var i = 0; i < str.length; i++){
//       word += str[i] + str[i];
//     };
//     return word;
//   };

//another users solution

// const doubleChar = (str) => str.split("").map(c => c + c).join("");

//2

// altERnaTIng cAsE <=> ALTerNAtiNG CaSe
// altERnaTIng cAsE <=> ALTerNAtiNG CaSe

// Define String.prototype.toAlternatingCase (or a similar function/method such as to_alternating_case/toAlternatingCase/ToAlternatingCase in your selected language; see the initial solution for details) such that each lowercase letter becomes uppercase and each uppercase letter becomes lowercase. For example:

//didn't really understand this

// String.prototype.toAlternatingCase = function () {
//     return this.split("").map(a => a === a.toUpperCase()? a.toLowerCase(): a.toUpperCase()).join('')
// }

// String.prototype.toAlternatingCase = function () {
//   // Define your method here :)
// };

// toAlternatingCase;

//3

// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

// Sam Harris => S.H

// patrick feeney => P.F

//my solution - worked

function abbrevName(name) {
  let arr = name.split(` `);
  let firstName = arr[0];
  let lastName = arr[1];
  return `${firstName[0].toUpperCase()}.${lastName[0].toUpperCase()}`;
}

console.log(abbrevName(`Kyle Keee`));

//other users solution

// function abbrevName(name){

//     var nameArray = name.split(" ");
//     return (nameArray[0][0] + "." + nameArray[1][0]).toUpperCase();
//   }
