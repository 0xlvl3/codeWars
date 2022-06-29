"use strict";

//1

// Now you have to write a function that takes an argument and returns the square of it.

// const square = (n) => n ** 2;

// console.log(square(3));

//2

// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

// function removeExclamationMarks(s) {
//   newStr = s.replace(/!/gi, "");
//   return newStr;
// }

//3

// Create a function that takes 2 integers in form of a string as an input, and outputs the sum (also as a string):

// Example: (Input1, Input2 -->Output)

// "4",  "5" --> "9"
// "34", "5" --> "39"
// "", "" --> "0"
// "2", "" --> "2"
// "-5", "3" --> "-2"
// Notes:

// If either input is an empty string, consider it as zero.

// Inputs and the expected output will never exceed the signed 32-bit integer limit (2^31 - 1)

// function sumStr(a, b) {
//   const numA = Number(a);
//   const numB = Number(b);
//   const sum = numA + numB;
//   const newStr = String(sum);
//   return newStr;
// }

// console.log(sumStr(`4`, `5`));

//4

// Alex just got a new hula hoop, he loves it but feels discouraged because his little brother is better than him

// Write a program where Alex can input (n) how many times the hoop goes round and it will return him an encouraging message :)

// If Alex gets 10 or more hoops, return the string "Great, now move on to tricks".
// If he doesn't get 10 hoops, return the string "Keep at it until you get it".

// const hoopCount = (n) =>
//   n >= 10 ? "Great, now move on to tricks" : "Keep at it until you get it";

//5

// Create a function that returns the name of the winner in a fight between two fighters.

// Each fighter takes turns attacking the other and whoever kills the other first is victorious. Death is defined as having health <= 0.

// Each fighter will be a Fighter object/instance. See the Fighter class below in your chosen language.

// Both health and damagePerAttack (damage_per_attack for python) will be integers larger than 0. You can mutate the Fighter objects.

// Example:
//   declare_winner(Fighter("Lew", 10, 2), Fighter("Harry", 5, 4), "Lew") => "Lew"

//   Lew attacks Harry; Harry now has 3 health.
//   Harry attacks Lew; Lew now has 6 health.
//   Lew attacks Harry; Harry now has 1 health.
//   Harry attacks Lew; Lew now has 2 health.
//   Lew attacks Harry: Harry now has -1 health and is dead. Lew wins.

// function declareWinner(fighter1, fighter2, firstAttacker) {
//   let fac1 = Math.ceil(fighter1.health / fighter2.damagePerAttack);
//   let fac2 = Math.ceil(fighter2.health / fighter1.damagePerAttack);
//   if (fac1 < fac2) {
//     return fighter2.name;
//   } else if (fac2 < fac1) {
//     return fighter1.name;
//   } else {
//     return firstAttacker;
//   }
// }

// function declareWinner(fighter1, fighter2, firstAttacker) {
//   let fighter1Dam = Math.ceil(fighter2.health / fighter1.damagePerAttack);
//   let fighter2Dam = Math.ceil(fighter1.health / fighter2.damagePerAttack);

//   if (fighter1Dam < fighter2Dam) {
//     return fighter1.name;
//   } else if (fighter2Dam < fighter1Dam) {
//     return fighter2.name;
//   } else return firstAttacker;
// }

// console.log(
//   declareWinner(new Fighter("Lew", 10, 2), new Fighter("Harry", 5, 4), "Lew")
// );

// function Fighter(name, health, damagePerAttack) {
//   this.name = name;
//   this.health = health;
//   this.damagePerAttack = damagePerAttack;
//   this.toString = function () {
//     return this.name;
//   };
// }

//1. two fighters, objects provided

//2. take turns attacking, death is <= 0 health

//3. health and damageperattack

//6
// Task
// Given a string str, reverse it omitting all non-alphabetic characters.

// Example
// For str = "krishan", the output should be "nahsirk".

// For str = "ultr53o?n", the output should be "nortlu".

// Input/Output
// [input] string str
// A string consists of lowercase latin letters, digits and symbols.

// [output] a string

// function reverseLetter(str) {
//   let arr = str.split(``).reverse().join(``);
//   const removeNum = arr.replace(/[^a-zA-Z]/gi, ``);
//   return removeNum;
// }

// console.log(reverseLetter(`kyle123!/%4012389`));
