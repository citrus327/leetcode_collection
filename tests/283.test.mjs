import { expect } from "vitest";
import { it } from "vitest";
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  if (!nums.length) {
    return;
  }

  let j = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[j] = nums[i];
      j++;
    }
  }

  for (; j < nums.length; j++) {
    nums[j] = 0;
  }
};

it("should work", () => {
  let arr = [0, 1, 0, 3, 12];
  moveZeroes(arr);
  expect(arr).toEqual([1, 3, 12, 0, 0]);
});
