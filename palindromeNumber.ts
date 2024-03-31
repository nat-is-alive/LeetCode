/*

9. Palindrome Number

Hint
Given an integer x, return true if x is a 
palindrome
, and false otherwise.

Example 1:

Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.

Example 2:

Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.

Example 3:

Input: x = 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.

*/

function isPalindrome(x: number): boolean {
  if (x < 0) {
    // if it's negative it will never be a palindrome
    return false;
  }

  let numAsStr: string = x.toString();
  let numAsStrRev: string = "";

  for (let i: number = numAsStr.length; i > -1; i--) {
    numAsStrRev += numAsStr.charAt(i).toString();
  }

  return numAsStr === numAsStrRev;
}

console.log(isPalindrome(121));
console.log(isPalindrome(-121));
console.log(isPalindrome(10));
