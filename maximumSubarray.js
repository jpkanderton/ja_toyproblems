// maximumSubarray.js

var maxSubArray = function(nums) {
  let largestSum = Number.MIN_SAFE_INTEGER;

  for (let i = 0; i < nums.length; i++) {
      let subLargest = Number.MIN_SAFE_INTEGER,
          currentSum = 0;
      for (let j = i; j < nums.length; j++) {
          currentSum += nums[j];
          if (currentSum > subLargest) { subLargest = currentSum }
      }
      if (subLargest > largestSum) { largestSum = subLargest }
  }

  return largestSum;
};

/*
Stats:
Runtime: 200 ms, faster than 9.90% of JavaScript online submissions for Maximum Subarray.
Memory Usage: 40.1 MB, less than 19.09% of JavaScript online submissions for Maximum Subarray.
*/