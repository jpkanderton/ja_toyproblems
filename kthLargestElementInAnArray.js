// kthLargestElementInAnArray.js

var findKthLargest = function(nums, k) {
  nums.sort((a, b) => b - a);
  return nums[k - 1]
};

/*
Runtime: 76 ms, faster than 94.62% of JavaScript online submissions for Kth Largest Element in an Array.
Memory Usage: 39.3 MB, less than 62.21% of JavaScript online submissions for Kth Largest Element in an Array.
*/