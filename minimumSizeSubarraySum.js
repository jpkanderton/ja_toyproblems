// minimumSizeSubarraySum.js
var minSubArrayLen = function(target, nums) {

  let currentSum = 0,
      len = 0,
      shortest,
      start = 0;

  for (let i = 0; i < nums.length; i++) {
      let num = nums[i];

      currentSum += num;
      len++;


      if (currentSum >= target) {
          if (!shortest || len < shortest) { shortest = len }
          i = start;
          currentSum = 0;
          len = 0;
          start = i + 1;
      }

  }
  if (!shortest) return 0;
  return shortest;
};
/*
Stats:
Runtime: 200 ms
Memory Usage: 39.7 MB
*/