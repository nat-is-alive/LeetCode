/*

7. Reverse Integer

Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

 

Example 1:

Input: x = 123
Output: 321
Example 2:

Input: x = -123
Output: -321
Example 3:

Input: x = 120
Output: 21
 

Constraints:

-231 <= x <= 231 - 1

*/

function reverse(x: number): number {
  let number: string = x.toString();
  let reversedNumber: string = "";
  let loopEnd: number = -1;

  if (x < 0) {
    // if negative number
    reversedNumber = "-";
    loopEnd = 0;
  }

  for (let i: number = number.length; i > loopEnd; i--) {
    reversedNumber += number.charAt(i).toString();
  }

  return parseInt(reversedNumber);
}

console.log(reverse(123));
console.log(reverse(-123));
console.log(reverse(120));
