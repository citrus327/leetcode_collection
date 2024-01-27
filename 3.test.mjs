/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  if (s.length <= 1) return s.length;
  let maxies = [];
  for (let i = 0; i < s.length; i++) {
    for (let j = i + 1; j <= s.length; j++) {
      const slice = s.slice(i, j);
      if (uniqString(slice)) {
        maxies.push(slice.length);
      } else {
        break;
      }
    }
  }
  return maxies.sort((a, b) => b - a)[0];
};

function uniqString(s) {
  return new Set(s).size === s.length;
}

import { expect } from "vitest";
import { it } from "vitest";

it("should pass", () => {
  expect(lengthOfLongestSubstring("abcabcbb")).toBe(3);
  expect(lengthOfLongestSubstring("bbbbb")).toBe(1);
  expect(lengthOfLongestSubstring("pwwkew")).toBe(3);
  expect(lengthOfLongestSubstring("au")).toBe(2);
});

it("should check uniq string", () => {
  expect(uniqString("abc")).toBe(true);
  expect(uniqString("aac")).toBe(false);
});
