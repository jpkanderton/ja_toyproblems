/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
  var result = [];
  for (var i = 1; i <= n; i++) {
      if (i % 3 === 0 || i % 5 === 0) {
          var fb = '';
          if (i % 3 === 0) {
              fb += 'Fizz';
          }
          if (i % 5 === 0) {
              fb += 'Buzz';
          }
          result.push(fb);
      } else {
          result.push(i.toString());
      }
  }
  return result;
};