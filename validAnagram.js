//validAnagram.js

var isAnagram = function(s, t) {
  if (s.length !== t.length) return false;

  let sObj = {};
  let mObj = {};

  for (var i = 0; i < s.length; i++) {
      let sItem = s[i], tItem = t[i];
      sObj[sItem] = !sObj[sItem] ? 1 : sObj[sItem] + 1;
      mObj[tItem] = !mObj[tItem] ? 1 : mObj[tItem] + 1;
  }

  for (key in sObj) {
      if (sObj[key] !== mObj[key]) return false;
  }

  return true;
};

/*
Stats:
Runtime: 92 ms, faster than 81.28% of JavaScript online submissions for Valid Anagram.
Memory Usage: 39.9 MB, less than 89.58% of JavaScript online submissions for Valid Anagram.
*/