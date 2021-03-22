// https://leetcode.com/problems/integer-to-roman/submissions/
// integerToRoman.js

var intToRoman = function(num) {
  let rslt = '';

  while (num > 0) {
      let crr = checkSize(num);
      let crrStr = '';
      for (let i = 0; i < crr[1]; i++) {
          console.log('crr')
          crrStr += map[crr[0]];
      }
      rslt += crrStr;
      num -= crr[0] * crr[1];
  }

  return rslt;
};

var map = {
  '1': 'I',
  '5': 'V',
  '10': 'X',
  '50': 'L',
  '100': 'C',
  '500': 'D',
  '1000': 'M',
  '4': 'IV',
  '9': 'IX',
  '40': 'XL',
  '90': 'XC',
  '400': 'CD',
  '900': 'CM'
}


var checkSize = function(num) {
  if (num >= 1000) {
      return [1000, Math.floor(num / 1000)];
  } else if (num >= 900) {
      return [900, 1];
  } else if (num >= 500) {
      return [500, 1];
  }  else if (num >= 400) {
      return [400, 1]
  } else if (num >= 100) {
      return [100, Math.floor(num / 100)];
  }  else if (num >= 90) {
      return [90, 1]
  } else if (num >= 50) {
      return [50, 1];
  }  else if (num >= 40) {
      return [40, 1];
  } else if (num >= 10) {
      return [10, Math.floor(num / 10)];
  }  else if (num === 9) {
      return [9, 1]
  } else if (num >= 5) {
      return [5, 1];
  }  else if (num === 4) {
      return [4, 1];
  } else {
      return [1, num];
  }
}

/*
Stats:
Runtime: 268 ms, faster than 10.39% of JavaScript online submissions for Integer to Roman.
Memory Usage: 50 MB, less than 5.08% of JavaScript online submissions for Integer to Roman.
*/