// isSubsequence.js
var isSubsequence = function(s, t) {
  let sIndex = 0;

  for (let i = 0; i < t.length; i++) {
      if (t[i] === s[sIndex]) {
          sIndex++;
      }
  }
  if (sIndex === s.length) {
      return true;
  } else {
      return false;
  }
};
/*
Runtime: 76 ms, faster than 87.17% of JavaScript online submissions for Is Subsequence.
Memory Usage: 39.9 MB, less than 11.07% of JavaScript online submissions for Is Subsequence.
*/