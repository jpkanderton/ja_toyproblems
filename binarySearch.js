var search = function(nums, target) {
  let start = 0, end = nums.length - 1;

  while(start <= end) {
      let midIndx = Math.floor((end - start) / 2) + start;
      let midVal = nums[midIndx];

      if (midVal === target) {
          return midIndx;
      } else if (midVal < target) {
          start = midIndx + 1;
      } else {
          end = midIndx - 1;
      }
  }

  return -1;
};

/*
Stats:
Runtime: 68 ms, faster than 99.38% of JavaScript online submissions for Binary Search.
Memory Usage: 42.7 MB, less than 15.05% of JavaScript online submissions for Binary Search.
*/