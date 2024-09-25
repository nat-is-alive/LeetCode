/*

Oh no!

Some really funny web dev gave you a sequence of numbers from his API response as an sequence of strings!

You need to cast the whole array to the correct type.

Create the function that takes as a parameter a sequence of numbers represented as strings and outputs a sequence of numbers.

ie:["1", "2", "3"] to [1, 2, 3]

Note that you can receive floats as well.

*/

const convert = (strArr: string[]): number[] => {
  let numArr: number[] = [];
  strArr.forEach((str: any, i: any) => {
    numArr[i] = parseFloat(str);
  });
  return numArr;
};

console.log(convert(["1", "2", "3.5"]));
