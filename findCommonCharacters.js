var commonChars = function(A) {
  if (!A) return null;

  var res = A[0].split('');

  for (var i = 1; i < A.length; i++) {
      let wrd = A[i].split('');
      res = res.filter(letA => {
          let indx = wrd.indexOf(letA);
          if (indx !== -1) {
              wrd.splice(indx, 1);
              return true
          } else {
              return false;
          }
      })
  }

  return res;

};

/*
Stats:
Runtime: 84 ms, faster than 92.17% of JavaScript online submissions for Find Common Characters.
Memory Usage: 42.3 MB, less than 59.13% of JavaScript online submissions for Find Common Characters.
*/
