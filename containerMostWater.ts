/*

11. Container With Most Water

You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

Find two lines that together with the x-axis form a container, such that the container contains the most water.

Return the maximum amount of water a container can store.

Notice that you may not slant the container.

/%                                        @@
/%                                        @@              %%
/%                                        @@              %%
/%        @@------------------------------@@              %%
/%        @@--------------@@--------------@@              %%
/%        @@--------------@@--------------@@              %%
/%        @@--------------@@------@@------@@              %%
/%        @@--------------@@------@@------@@              %%
/%        @@--------------@@------@@------@@      @@      %%
/%        @@------@@------@@------@@------@@      @@      %%
/%        @@------@@------@@------@@------@@      @@      %%
/%        @@------@@------@@------@@------@@      @@      %%
/%        %%------@@------@@------@@------@@      %%      %%

Example 1:

Input: height = [1,8,6,2,5,4,8,3,7]
Output: 49
Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.
Example 2:

Input: height = [1,1]
Output: 1

Constraints:

n == height.length
2 <= n <= 105
0 <= height[i] <= 104

*/

function maxArea(height: number[]): number {
  let iPos: number[] = [];
  let jPos: number[] = [];
  let volume: number[] = [];

  let largestVol: number = 0;
  let largestiPos: number = 0;
  let largestjPos: number = 0;

  for (let i = 0; i < height.length; i++) {
    for (let j = 0; j < height.length; j++) {
      iPos.push(i);
      jPos.push(j);
      volume.push(calcVol(height[i], height[j], calcDist(i, j)));
    }
  }

  for (let i = 0; i < volume.length; i++) {
    if (volume[i] > largestVol) {
      largestVol = volume[i];
      largestiPos = iPos[i];
      largestjPos = jPos[i];
    }
  }

  console.log(
    "The largest volume is " +
      largestVol +
      " and is between indexes " +
      largestiPos +
      " and " +
      largestjPos
  );

  return largestVol;
}

function calcVol(i: number, j: number, dist: number): number {
  if (i > j) {
    return j * dist;
  } else {
    return i * dist;
  }
}

function calcDist(i: number, j: number): number {
  if (i > j) {
    return i - j;
  } else {
    return j - i;
  }
}

maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]);
