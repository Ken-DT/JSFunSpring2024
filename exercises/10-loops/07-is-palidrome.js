let string = "Dale";

/**
 * A palindrome is a word, phrase, or sequence that reads the same backward as forward, e.g., madam or racecar.
 *
 * Create a variable called "isPalindrome".
 * It should equal true if "string" is a palindrome
 * and false if it is not.
 *
 * Use the split and join methods to solve this problem.
 */

// WRITE YOUR ANSWER BELOW THIS LINE


let reversedString = string.split('').reverse().join('');

let isPalindrome = string === reversedString;

console.log(isPalindrome); 

const kidneyDisease = {
  s5: "kidneyFailure",
  rx: "not a cure"
};

const {s5,rx} = kidneyDisease;

console.log(s5);
console.log(rx);