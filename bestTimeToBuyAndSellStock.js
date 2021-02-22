// bestTimeToBuyAndSellStock.js
var maxProfit = function(prices) {
  let max = 0;
  let min = prices[0];

  for (let i = 0; i < prices.length; i++) {
      let curr = prices[i];
      if (curr < min) min = curr;
      if (curr - min > max) max = curr - min;
  }

  return max;
};
/*
Stats:
Runtime: 100 ms, faster than 59.82% of JavaScript online submissions for Best Time to Buy and Sell Stock.
Memory Usage: 48.7 MB, less than 49.17% of JavaScript online submissions for Best Time to Buy and Sell Stock.
*/