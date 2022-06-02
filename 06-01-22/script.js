//1

// Let's play! You have to return which player won! In case of a draw return Draw!.

// Examples:

// rps('scissors','paper') // Player 1 won!
// rps('scissors','rock') // Player 2 won!
// rps('paper','paper') // Draw!

//my solution - worked

const rps = (p1, p2) => {
    if (p1 === 'rock' && p2 === 'paper') {
        return `Player 2 won!`;
    } else if (p1 === 'paper' && p2 === 'scissors') {
        return `Player 2 won!`;
    } else if (p1 === 'paper' && p2 === 'rock') {
        return `Player 1 won!`;
    } else if (p1 === 'rock' && p2 === 'scissors') {
        return `Player 1 won!`;
    } else if (p1 === 'rock' && p2 === 'rock') {
        return `Draw!`;
    } else if (p1 === 'scissors' && p2 === 'rock') {
        return `Player 2 won!`;
    } else if (p1 === 'paper' && p2 === 'scissors') {
        return `Player 2 won!`;
    } else if (p1 === 'scissors' && p2 === 'paper') {
        return `Player 1 won!`;
    } else if (p1 === 'scissors' && p2 === 'scissors') {
        return `Draw!`;
    } else if (p1 === 'paper' && p2 === 'paper') {
        return `Draw!`;
    }

}


//better solution from others

// const rps = (p1, p2) => {
//     if (p1 === p2) return "Draw!";
//     var rules = { rock: "scissors", paper: "rock", scissors: "paper" };
//     if (p2 === rules[p1]) {
//         return "Player 1 won!";
//     }
//     else {
//         return "Player 2 won!";
//     }
// };


//2

// Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

// Example:
// ["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

// None of the arrays will be empty, so you don't have to worry about that!

//my attempted I couldn't figure this one out
// function removeEveryOther(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr % 2 === 0) {
//             arr.remove();
//         }
//         return arr;
//     }
// }

//solution
// function removeEveryOther(arr){
//     //your code here
//     for (var i = 1; i < arr.length;i++){
//         arr.splice(i,1);
//     }
//     return arr;
//   }

//3
// Write a function that checks if a given string (case insensitive) is a palindrome.

// my solution - worked
const isPalindrome = x => {
    let y = x.split('')
    y = y.reverse('');
    y = y.join('');
    y = y.toLowerCase();
    x = x.toLowerCase();
    if (x === y) {
        return true;
    } else return false;
}

// console.log(isPalindrome(`raceCar`));

//other users solution
// const isPalindrome = (x) => {
//     return x.split("").reverse().join("").toLowerCase() === x.toLowerCase() ? true : false
//   }


//4

// Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

// invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
// invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
// invert([]) == []
// You can assume that all values are integers. Do not mutate the input array/list.

//my solution - worked
const invert = (array) => {
    let invArray = [];
    for (let i = 0; i < array.length; i++) {
        invArray[i] = array[i] * -1;
    }
    return invArray;
}

console.log(invert([1, 23, 23, 23, 23]));


//other users solution
// function invert(array) {
//     return array.map( x => x === 0 ? x : -x);
//  }