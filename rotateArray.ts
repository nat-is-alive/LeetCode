/*

Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.

https://leetcode.com/problems/rotate-array/description/?envType=study-plan-v2&envId=top-interview-150

*/

function rotate(nums: number[], k: number): number[] {
  let newArr: number[] = [nums.length];

  for (let i = 0; i < nums.length; i++) {
    //
    if (i + k >= nums.length) {
      console.log(nums[i] + " moves to position " + (i + k - nums.length));
      newArr[i + k - nums.length] = nums[i];
    } else if (i + k < nums.length) {
      console.log(nums[i] + " moves to position " + (i + k));
      newArr[i + k] = nums[i];
    }
  }
  return newArr;
}

let output: number[] = rotate([1, 2, 3, 4, 5, 6, 7], 4);

let expectedOutPut: number[] = [4, 5, 6, 7, 1, 2, 3];

console.log(output, expectedOutPut);
