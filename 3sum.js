/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  var results = [];
  if (nums.length < 3) return results;
  // if (nums.length === 3) return [nums];
  var target = 0;

  nums.sort(function(a, b) {
    return a - b;
  });
  var i = 0;


  for (var i = 0; i < nums.length - 2; i++) {
      if (nums[i] > 0) {break};
      if (i > 0 && nums[i] === nums[i-1]) {continue}
      var j = i + 1;
      var z = nums.length - 1;
      while (j < z) {
          var sum = nums[i] + nums[j] + nums[z];
          if ( sum === target) {
              results.push([nums[i], nums[j], nums[z]]);
              while (nums[j] === nums[j + 1]) { j++ }
              while (nums[z] === nums[z - 1]) { z-- }
              j++;
              z--;
          } else if (sum < target) {
              j++;
          } else {
              z--
          }
      }
  }
  return results;
};