
var lengthOfLongestSubstring = function(s) {
  var substring = {};
  var largestCount = 0;
  var currentCount = 0;
  for (var i = 0; i < s.length; i++) {
      if (substring[s[i]]) {
          currentCount = 1;
          var j = 1;
          while (substring[s[i-j]] !== substring[s[i]]) {
              currentCount++;
              j++;
          }
          substring = {};
      } else {
          currentCount++;
      }
      substring[s[i]] = s[i];
      if (currentCount > largestCount) {
          largestCount = currentCount;
      }
  }
  return largestCount;
};