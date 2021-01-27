/**
 * @param {string[]} strs
 * @return {string}
 */

/*
input: array of strings
output: a string (represents the longest common prefix)

example1:
input : ['flower', 'flick', 'flounder']
output: 'fl'

example2:
input: ['a', 'cd', 'dcd']
output: '';

// create a variable for commonPrefixes
// create a variable for longestPrefix

// iterate over the array of strings
  // iterate over the string item
    // create a variable for currentPrefix that equals the string up through the current item
    // if commonPrefix is empty
      // add currentPrefix to the commonPrefixes object
    // otherwise
      // if the currentPrefix is NOT in the commonPrefix object
        // remove the currentPrefix property from the commonPrefixObject
// iterate over the object
  // check the length of each property
  // if commonPrefix's length is 0
    // set property to longestPrefix
  // if commonPrefix property's length is greater than the longestPrefix's length
    // set property to longestPrefix
// return longestPrefix

variable for commonPrefixes
variable for currentPrefix
variable for longestPrefix
return the longestPrefix



*/
var longestCommonPrefix = function(strs) {
  if (strs.length === 0) return '';

  var str = strs[0];
  var longestPrefix = '';

  for (var i = 0; i < str.length; i++) {
      var currentLetter = str[i];
      for (var j = 1; j < strs.length; j++) {
          if (strs[j][i] !== currentLetter) return longestPrefix;
      }
      longestPrefix = longestPrefix + currentLetter;
  }
  return longestPrefix
};