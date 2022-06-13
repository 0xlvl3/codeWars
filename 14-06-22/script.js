"use strict";

//1

// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

function getCount(str) {
  let vowelsCount = 0;
  let vowels = ["a", "e", "i", "o", "u"];
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < vowels.length; j++) {
      if (str[i] === vowels[j]) {
        vowelsCount++;
      }
    }
  }

  return vowelsCount;
}

//2

// Who remembers back to their time in the schoolyard, when girls would take a flower and tear its petals, saying each of the following phrases each time a petal was torn:

// I love you
// a little
// a lot
// passionately
// madly
// not at all
// When the last petal was torn there were cries of excitement, dreams, surging thoughts and emotions.

// Your goal in this kata is to determine which phrase the girls would say for a flower of a given number of petals, where nb_petals > 0.

// function howMuchILoveYou(nbPetals) {
//   // your code
//   switch (nbPetals) {
//     case 1:
//       return `I love you`;
//       break;
//     case 2:
//       return `a little`;
//       break;
//     case 3:
//       return `a lot`;
//       break;
//     case 4:
//       return `passionately`;
//       break;
//     case 5:
//       return `madly`;
//       break;
//     case 6:
//       return `not at all`;
//       break;
//     default:
//       return `I love you`;
//       break;
//   }
// }

// function howMuchILoveYou(nbPetals) {
//   if (nbPetals % 1 === 0) return `I love you`;
//   if (nbPetals % 2 === 0) return `a little`;
//   if (nbPetals % 3 === 0) return `a lot`;
//   if (nbPetals % 4 === 0) return `passionately`;
//   if (nbPetals % 5 === 0) return `madly`;
//   if (nbPetals % 6 === 0) return `not at all`;
// }

// const phrases = [
//   'I love you',
//   'a little',
//   'a lot',
//   'passionately',
//   'madly',
//   'not at all',
// ]

// function howMuchILoveYou(n) {
//    return phrases[(n - 1) % phrases.length]
// }

//3

// In this simple exercise, you will create a program that will take two lists of integers, a and b. Each list will consist of 3 positive integers above 0, representing the dimensions of cuboids a and b. You must find the difference of the cuboids' volumes regardless of which is bigger.

// For example, if the parameters passed are ([2, 2, 3], [5, 4, 1]), the volume of a is 12 and the volume of b is 20. Therefore, the function should return 8.

// Your function will be tested with pre-made examples as well as random ones.

// If you can, try writing it in one line of code.

//my solution, just didn't know about Math.abs that was needed to complete it.
const findDifference = (a, b) =>
  Math.abs(a.reduce((x, y) => x * y) - b.reduce((z, i) => z * i));
