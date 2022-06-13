"use strict"

//1

// The museum of incredible dull things
// The museum of incredible dull things wants to get rid of some exhibitions. Miriam, the interior architect, comes up with a plan to remove the most boring exhibitions. She gives them a rating, and then removes the one with the lowest rating.

// However, just as she finished rating all exhibitions, she's off to an important fair, so she asks you to write a program that tells her the ratings of the items after one removed the lowest one. Fair enough.

// Task
// Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with a lower index. If you get an empty array/list, return an empty array/list.

// Don't change the order of the elements that are left.

// Examples
// * Input: [1,2,3,4,5], output= [2,3,4,5]
// * Input: [5,3,2,1,4], output = [5,3,2,4]
// * Input: [2,2,1,2,1], output = [2,2,2,1]

//my code, could get rid of the smallest from the array but they wanted only one of the smallest out of the array 
// function removeSmallest(numbers) {
//   let min = Math.min(...numbers);
//   return numbers.filter(e => e != min)
// }

// //other users solution
// function removeSmallest(numbers) {
//   let indexOfMin = numbers.indexOf(Math.min(...numbers));
//   return [...numbers.slice(0, indexOfMin), ...numbers.slice(indexOfMin + 1)];
// }

//2

// Character recognition software is widely used to digitise printed texts. Thus the texts can be edited, searched and stored on a computer.

// When documents (especially pretty old ones written with a typewriter), are digitised character recognition softwares often make mistakes.

// Your task is correct the errors in the digitised text. You only have to handle the following mistakes:

// S is misinterpreted as 5
// O is misinterpreted as 0
// I is misinterpreted as 1
// The test cases contain numbers only by mistake.

//not my solution
// const corrections = {
//   '5': 'S',
//   '0': 'O',
//   '1': 'I',
// };

// const correct = string => (
//   string.replace(/[501]/g, character => corrections[character])
// );

//3

// Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

const grow = x => x.reduce((a, b) => a*b);
