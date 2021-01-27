/**
 * @param {string} s
 * @return {number}
 */
/*
input: string -> roman numeral -> 'XX'
output: number -> represent roman numeral -> 20
constraints: no constraints
input: 'XX'
    create variable as result
    iterate over the input
        create currentItem variable and set as the value from the romanNumeral object
        create nextItem variable and set as the value of the item from the romanNumeral object
        if the currentItem is less than the nextItem or the nextItem is undefined
            set the currentItem to be equal to the nextItem minus the currentItem
            increment i by 1
        create variable currentAsString that is set as the current item as a string
        add currentAsString to result;
    return result converted to string

        currentItem =  X // nextItem =  X // currentAsString =  'X' //  result = '10';
        currentItem =  X // nextItem =  undefined // currentAsString =  'X' //  result = 'X';
output: 20

input: 'XLIX'
output: 20
*/
var romanToInt = function(s) {
  var romanNumeral = {
      I: 1,
      V: 5,
      X: 10,
      L: 50,
      C: 100,
      D: 500,
      M: 1000,
  }

  var result = 0;

  for (var i = 0; i < s.length; i++) {
      var current = s[i];
      var currentValue = romanNumeral[current];
      if (s[i + 1] !== undefined) {
          var next = s[i + 1];
          var nextValue = romanNumeral[next];
          if (currentValue < nextValue) {
              currentValue = nextValue - currentValue;
              i++;
          }
      }
      result += currentValue;
  }
  return result;
};