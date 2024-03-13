/**
 * Create a function called "countNumberOfDigits".
 * Given an integer, it should return the number of digits in an integer.
 *
 * @param {int} num
 * @returns {int} the number of digits
 *
 * @example countNumberOfDigits(5000); // 4
 * You should use arrow syntax.
 */

// WRITE YOUR ANSWER BELOW THIS LINE

const countNumberOfDigits = num => Math.abs(num).toString().length;

console.log(countNumberOfDigits(7031966));


const transplant = ["organ", "month", "day", "year"] ;

  console.log (transplant[0]);
  console.log(transplant[1]);
  console.log(transplant[2]);
  console.log(transplant[3]);

  let organs = ["Kidney","Liver", "Heart"];
  organs [2] = "Lungs";

  console.log(organs);

  organs.push ("Heart");

  console.log(organs);
