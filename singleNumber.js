// singleNumber.js

var singleNumber = function(nums) {
  const map = new Map();
  nums.forEach((itm, indx, arr) => {
      if (map.has(itm)) {
          map.set(itm, map.get(itm) + 1)
      } else {
          map.set(itm, 1)
      }
  });

  let res;

  map.forEach((value, key) => {
      if (value === 1) res = key;
  })

  return res;
}

/*
Stats:
Runtime: 76 ms, faster than 97.89% of JavaScript online submissions for Single Number.
Memory Usage: 42.9 MB, less than 45.86% of JavaScript online submissions for Single Number.
*/