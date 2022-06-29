"use strict";

//1

// Your task is to create a function that does four basic mathematical operations.

// The function should take three arguments - operation(string/char), value1(number), value2(number).
// The function should return result of numbers after applying the chosen operation.

// Examples(Operator, value1, value2) --> output
// ('+', 4, 7) --> 11
// ('-', 15, 18) --> -3
// ('*', 5, 5) --> 25
// ('/', 49, 7) --> 7

//my solution - worked
// const basicOp = (operation, value1, value2) => {
//   switch (operation) {
//     case "+":
//       return value1 + value2;
//       break;
//     case "-":
//       return value1 - value2;
//       break;
//     case "*":
//       return value1 * value2;
//       break;
//     case "/":
//       return value1 / value2;
//       break;
//     case "%":
//       return value1 % value2;
//       break;
//   }
// };
//all other solutions were similar to mine just more compressed

//2

// Create a function with two arguments that will return an array of the first (n) multiples of (x).

// Assume both the given number and the number of times to count will be positive numbers greater than 0.

// Return the results as an array (or list in Python, Haskell or Elixir).

// Examples:

// countBy(1,10) === [1,2,3,4,5,6,7,8,9,10]
// countBy(2,5) === [2,4,6,8,10]

//my solution - worked
//had trouble with index 0 sticking around had to use shift to remove it before returning the array
// function countBy(x, n) {
//   let z = [x];
//   for (let i = 1; i <= n; i++) {
//     z[i] = x * [i];
//   }
//   z.shift(0);
//   return z;
// }

//other user solution

// function countBy(x, n) {
//   var z = [];
//   for (var i = 1; i <= n; i++) {
//     //pushing the equation into the array
//     z.push(x * i);
//   }
//   return z;
// }

// console.log(countBy(1, 10));

//3

// Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.

// If you want to know more: http://en.wikipedia.org/wiki/DNA

// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". You function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

// More similar exercise are found here: http://rosalind.info/problems/list-view/ (source)

// Example: (input --> output)

// "ATTGC" --> "TAACG"
// "GTAT" --> "CATA"

// const DNAStrand = (dna) => {
//   let newDNA = "";
//   for (let i = 0; i <= dna; i++) {
//     switch (dna[i]) {
//       case "A":
//         newDNA += "T";
//         break;
//       case "T":
//         newDNA += "A";
//         break;
//       case "C":
//         newDNA += "G";
//         break;
//       case "G":
//         newDNA += "C";
//         break;
//       default:
//         break;
//     }
//   }
//   console.log(newDNA);
//   return newDNA.toUpperCase();
// };

// console.log(DNAStrand("ATCG"));

function DNAStrand(dna) {
  let newDNA = "";
  for (let i = 0; i < dna.length; i++) {
    switch (dna[i]) {
      case "A":
        newDNA += "T";
        break;
      case "T":
        newDNA += "A";
        break;
      case "G":
        newDNA += "C";
        break;
      case "C":
        newDNA += "G";
        break;
      default:
        break;
    }
  }
  return newDNA;
}

console.log(DNAStrand("ACGT"));

//4

//ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

// If the function is passed a valid PIN string, return true, else return false.

// Examples (Input --> Output)
// "1234"   -->  true
// "12345"  -->  false
// "a234"   -->  false

function validatePIN(pin) {
  let pinNum = [];
  for (let i = 0; i <= pin; i++) {
    if (pin === typeof Number) {
      pinNum += pin[i];
    }
  }
  return pinNum;
}
console.log(validatePIN(1234));
