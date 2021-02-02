var restoreString = function(s, indices) {
  var len = s.length
  var obj = {};
  var result = '';
  for (var i = 0; i < len; i++) {
      var newIndex = indices[i];
      var newLetter = s[i];
      obj[newIndex] = newLetter;
  }
  for (var j = 0; j < len; j++) {
      if (obj[j] === 'd') { console.log('j: ', j)}
      result += obj[j];
  }

  return result;
};