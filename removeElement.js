// https://leetcode.com/problems/remove-element/submissions/

var removeElement = function(nums, val) {
  let i = 0;
  let len = nums.length;

  while(i < len) {
      if(nums[i] === val) {
          nums.splice(i, 1);
          i--;
          len--;
      }
      i++
  }

  return len;
};

/*
Stats:
Runtime: 80 ms, faster than 66.44% of JavaScript online submissions for Remove Element.
Memory Usage: 38.6 MB, less than 58.70% of JavaScript online submissions for Remove Element.
*/