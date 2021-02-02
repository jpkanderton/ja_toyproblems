var maximumWealth = function(accounts) {
  var maxSum = 0;
  for (var cust = 0; cust < accounts.length; cust++) {
      var currentSum = 0;
      for (var bank = 0; bank < accounts[cust].length; bank++) {
          currentSum += accounts[cust][bank];
      }
      if (currentSum > maxSum) {maxSum = currentSum};
  }
  return maxSum
}