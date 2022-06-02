//1

// Kata Task
// I have a cat and a dog.

// I got them at the same time as kitten/puppy. That was humanYears years ago.

// Return their respective ages now as [humanYears,catYears,dogYears]

// NOTES:

// humanYears >= 1
// humanYears are whole numbers only
// Cat Years
// 15 cat years for first year
// +9 cat years for second year
// +4 cat years for each year after that

// Dog Years
// 15 dog years for first year
// +9 dog years for second year
// +5 dog years for each year after that

//had to get help from other users
//I had a forloop within an if statement
const humanYearsCatYearsDogYears = (humanYears) => {
  function calculateCatYear(humanYears) {
    let result = 0;

    //cat years
    for (let i = 0; i <= humanYears; i++) {
      if (i === 1) {
        result += 15;
      }
      if (i === 2) {
        result += 9;
      }
      if (i > 2) {
        result += 4;
      }
    }
    return result;
  }
  function calculateDogYear(humanYears) {
    let result = 0;
    for (let i = 0; i <= humanYears; i++) {
      if (i === 1) {
        result += 15;
      }
      if (i === 2) {
        result += 9;
      }
      if (i > 2) {
        result += 5;
      }
    }
    return result;
  }
  return [
    humanYears,
    calculateCatYear(humanYears),
    calculateDogYear(humanYears),
  ];
};

console.log(humanYearsCatYearsDogYears(5));

//2

// In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

// Example
// filter_list([1,2,'a','b']) == [1,2]
// filter_list([1,'a','b',0,15]) == [1,0,15]
// filter_list([1,2,'aasf','1','123',123]) == [1,2,123]

//my solution - worked
const filter_list = (list) => {
  return list.filter(function (x) {
    //when we look for number we use "number" in strings
    return typeof x === "number";
  });
};

console.log(filter_list([1, 2, "a", "b"]));

//other users solution

// function filter_list(l) {
//     return l.filter(v => typeof v == "number")
//    }

//3

// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)

// "Dermatoglyphics" --> true
// "aba" --> false
// "moOse" --> false (ignore letter case)

//couldn't figure this one out
//my solution

// const isIsogram = (str) => {
//   let arrOne = [];
//   let arrTwo = [];
//   arrOne = str.split("");
//   arrTwo = str.split("");
//   console.log(arrOne, arrTwo);
//   for (let i = 0; i <= arrOne.length; i++) {
//     for (let y = 0; y <= arrOne.length; y++) {
//       if (arrOne[i] === arrTwo[y]) {
//         return false;
//       } else return true;
//     }
//   }
// };

//other users solution
// function isIsogram(str){
//   var i, j;
//   str = str.toLowerCase();
//   for(i = 0; i < str.length; ++i)
//     for(j = i + 1; j < str.length; ++j)
//       if(str[i] === str[j])
//         return false;
//   return true;
// }
