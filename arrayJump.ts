/*

You are given an integer array nums. You are initially positioned at the array's first index, and each element in the array represents your maximum jump length at that position.

Return true if you can reach the last index, or false otherwise.

*/

function canJump(nums: number[]): boolean {
  let stepsToEnd = nums.length - 1;
  let totalSteps = 0;
  let currentIndex = 0;
  console.log("Needed: ", stepsToEnd);

  while (totalSteps < stepsToEnd && currentIndex < stepsToEnd) {
    if (nums[currentIndex] == 0) {
      return false;
    }
    totalSteps += nums[currentIndex];
    console.log(nums[currentIndex]);
    console.log("Total: ", totalSteps);
    currentIndex = currentIndex + nums[currentIndex];
  }
  return stepsToEnd <= totalSteps;
}

console.log(canJump([2, 3, 1, 1, 4]));
console.log(canJump([3, 2, 1, 0, 4]));
