var isPalindrome = function(x) {
  if (x < 0) return false;

  var xStr = x.toString();
  var a = 0;
  var b = xStr.length - 1;

  while (a < b) {
      if (xStr[a] !== xStr[b]) return false;
      a++, b--;
  }

  return true;
};

/*
Stats:
Runtime: 208 ms, faster than 87.58% of JavaScript online submissions for Palindrome Number.
Memory Usage: 48.7 MB, less than 67.45% of JavaScript online submissions for Palindrome Number.
*/