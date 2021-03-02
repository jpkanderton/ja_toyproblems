// removeDuplicatesFromSortedArray.js

var removeDuplicates = function(nums) {
  let set = new Set();
  let origLen = nums.length;

  for (let i = 0; i < nums.length; i++) {
      if (!set.has(nums[i])) {
          set.add(nums[i]);
      }
  }

  let i = 0;
  let size = set.size;
  set.forEach((item) => {
      nums[i] = item;
      i++;
  });

  return size;

};

/*
Runtime: 88 ms, faster than 91.98% of JavaScript online submissions for Remove Duplicates from Sorted Array.
Memory Usage: 41.4 MB, less than 15.85% of JavaScript online submissions for Remove Duplicates from Sorted Array.
*/