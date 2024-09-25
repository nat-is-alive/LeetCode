/*

Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot separating them.

It should look like this:

Sam Harris => S.H

patrick feeney => P.F

https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3

*/

const abbreviate = (name: string): string =>
  (name.charAt(0) + "." + name.charAt(name.indexOf(" ") + 1)).toUpperCase();

console.log(abbreviate("Sam Harris") === "S.H");
console.log(abbreviate("patrick feeney") === "P.F");
