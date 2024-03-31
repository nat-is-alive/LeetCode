/*

4. Median of Two Sorted Arrays

Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

The overall run time complexity should be O(log (m+n)).

 

Example 1:

Input: nums1 = [1,3], nums2 = [2]
Output: 2.00000
Explanation: merged array = [1,2,3] and median is 2.
Example 2:

Input: nums1 = [1,2], nums2 = [3,4]
Output: 2.50000
Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.
 

Constraints:

nums1.length == m
nums2.length == n
0 <= m <= 1000
0 <= n <= 1000
1 <= m + n <= 2000
-106 <= nums1[i], nums2[i] <= 106

*/

function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  // concatenate arrays and sort into ascending numerical order
  let nums: number[] = nums1.concat(nums2).sort(); // O(1) O(n)

  // check if array is even or odd.
  if (nums.length % 2 == 0) {
    // O(1)
    // if even divide length of array by two to get the index to the right of centre, take one from that to get index of the left of centre. add these together and divide by two to get mean average of the mode
    return (nums[nums.length / 2 - 1] + nums[nums.length / 2]) / 2;
  } else {
    //if it's odd, minus 1 from length, half it to find the middle index.
    return nums[(nums.length - 1) / 2];
  }
}

console.log(findMedianSortedArrays([1, 3], [2])); // 2
console.log(findMedianSortedArrays([1, 2], [3, 4])); //2.5
