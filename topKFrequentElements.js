// topKFrequentElements.js

var topKFrequent = function(nums, k) {
  let map = {};

  for (let i = 0; i < nums.length; i++) {
      if (!map[nums[i]]) {
          map[nums[i]] = 1;
      } else {
          map[nums[i]]++;
      }
  }

  let result = [];

  for (let j = 0; j < k; j++) {
      let lrgst =  getLrgst(map);
      result.push(lrgst);
      delete map[lrgst];
  }


  return result;
};

var getLrgst = function(map) {
  let amnt;
  let lrgstItm;

  Object.keys(map).forEach((itm) => {
      if(!amnt || map[itm] > amnt) { amnt = map[itm]; lrgstItm = itm }
  })

  return lrgstItm;
}

/*
Stats:
Runtime: 240 ms, faster than 5.13% of JavaScript online submissions for Top K Frequent Elements.
Memory Usage: 46.6 MB, less than 7.42% of JavaScript online submissions for Top K Frequent Elements.
*/