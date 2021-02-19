// findTheDuplicateNumber.js
var findDuplicate = function(nums) {
  const set = new Set();;

  for (let i = 0; i < nums.length; i++) {
      let itm = nums[i];
      if (set.has(itm)) return itm;
      set.add(itm);
  }
};
/*
Stats:
Runtime: 80 ms, faster than 80.85% of JavaScript online submissions for Find the Duplicate Number.
Memory Usage: 40.5 MB, less than 35.21% of JavaScript online submissions for Find the Duplicate Number.
*/