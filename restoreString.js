var restoreString = function(s, indices) {
  var len = s.length
  var newArr = new Array();

  for (var i = 0; i < len; i++) {
      newArr[indices[i]] = s[i];
  }

  return newArr.join('');
};

/*
Current Stats:
Runtime: 92 ms, faster than 59.42% of JavaScript online submissions for Shuffle String.
Memory Usage: 40.8 MB, less than 15.72% of JavaScript online submissions for Shuffle String.
*/