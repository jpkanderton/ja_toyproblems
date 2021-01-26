/**
 * @param {number} x
 * @return {number}
 */

/*
 example: 12 -> 21
 example: 0 -> 0
 edge case: -2^31 or 2^31
    if absolute value of input is greater than 2^31, return 0
    create a boolean variable called "isPositive" set to true
    if input is negative, set isPositive to false
    create variable numAsString convert the absolute value of the integer into a string
    create a variable called result
    loop backwards on the numAsString
        add each item to the result variable
    convert the result to an integer
    check if isPositive is false
        then set integer to integer * -1
 input: 12
    var isPositive = true;
    var numAsString = '12'
    var result = '';
    var result = '2'
    var result = '21'
    var result = 21
    check if isPositive is false
    return 21
 output: 21
 input: -100
    isPositive = false;
    numAsString = '100'
    result = '';
    result = '0'
    result = '00'
    result = '001'
    result = 1
    result = -1

 input
*/
var reverse = function(x) {

  var isPositive = true;
  if (x < 0) {
      isPositive = false;
  }
  var numAsString = Math.abs(x).toString();
  var result = '';
  for (var i = (numAsString.length - 1); i >= 0; i--) {
      result += numAsString[i];
  }
  result = parseInt(result);
  if (!isPositive) {
      result = result * -1;
  }
  if (result < Math.pow(-2, 31) || result > Math.pow((2), 31)) {
      console.log('0');
      return 0;
  }
  return result;
};