/*

6. Zigzag Conversion

The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

P   A   H   N
A P L S I I G
Y   I   R

And then read line by line: "PAHNAPLSIIGYIR"

Write the code that will take a string and make this conversion given a number of rows:

string convert(string s, int numRows);
 

Example 1:

Input: s = "PAYPALISHIRING", numRows = 3
Output: "PAHNAPLSIIGYIR"
Example 2:

Input: s = "PAYPALISHIRING", numRows = 4
Output: "PINALSIGYAHRPI"
Explanation:
P     I    N
A   L S  I G
Y A   H R
P     I
Example 3:

Input: s = "A", numRows = 1
Output: "A"
 

Constraints:

1 <= s.length <= 1000
s consists of English letters (lower-case and upper-case), ',' and '.'.
1 <= numRows <= 1000

*/

function convert(s: string, numRows: number): string {
  let currentRow: number = 0;
  const maxRow: number = numRows;
  let direction: boolean = true; // true down false up
  let zigzag: string[][] = [];
  let output: string = "";

  // Initialize zigzag 2d array
  for (let i = 0; i < maxRow; i++) {
    // loop until the max size of rows
    zigzag[i] = []; // add an array to each of the rows in the array until max rows is reached
  }

  for (let i = 0; i < s.length; i++) {
    zigzag[currentRow].push(s.charAt(i).toString()); // put the current letter into the array row

    if (currentRow == 0) {
      // if we're at the top row switch directions
      direction = true;
    } else if (currentRow == maxRow - 1) {
      // if we're at the bottom row switch directions
      direction = false;
    }

    // now change row depending on direction

    if (direction) {
      // if going down
      currentRow++;
    } else {
      // if going up
      currentRow--;
    }
  }

  // once all letters added to the rows

  for (let i = 0; i < maxRow; i++) {
    // loop through all rows
    output += zigzag[i].join(""); // join the arrays strings and add to the output
  }

  return output;
}

console.log(convert("PAYPALISHIRING", 3));
console.log(convert("PAYPALISHIRING", 4));
console.log(convert("A", 1));
