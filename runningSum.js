var runningSum = function(nums) {
  for (var i = 0; i < nums.length; i++) {
      if (nums[i - 1]) nums[i] = nums[i-1] + nums[i];
  }
  return nums;
};

/*
Stats:
Runtime: 88 ms, faster than 28.70% of JavaScript online submissions for Running Sum of 1d Array.
Memory Usage: 38.6 MB, less than 90.73% of JavaScript online submissions for Running Sum of 1d Array.
*/