var isValid = function(s) {
  var map = {
      '{': '}',
      '[': ']',
      '(': ')'
  }

  var stack = [];

  for (var i = 0; i < s.length; i++) {
      var item = s[i];
      if (map[item]) {
          stack.push(map[item]);
      } else if (item !== stack.pop()) {
          return false;
      }
  }

  return !stack.length ? true : false;
}
