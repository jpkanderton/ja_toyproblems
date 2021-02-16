var thirdMax = function(nums) {
  let max1, max2, max3;

  nums.forEach((itm, indx, arr) => {
      if (!max1 || itm >= max1) {
          if (itm !== max1) {
              max3 = max2;
              max2 = max1;
              max1 = itm;
          }
      } else if (!max2 || itm >= max2) {
          if (itm !== max2) {
              max3 = max2;
              max2 = itm;
          }
      } else if (!max3 || itm >= max3) {
          if (itm !== max3) {
              max3 = itm;
          }
      }
  });

  if (max3 !== undefined) return max3;
  return max1;
};

/*
Stats:
Runtime: 80 ms, faster than 81.66% of JavaScript online submissions for Third Maximum Number.
Memory Usage: 38.7 MB, less than 96.56% of JavaScript online submissions for Third Maximum Number.
*/