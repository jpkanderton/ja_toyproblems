var nextLargerNodes = function(head) {
  const result = [];

  while (head) {
      let currVal = head.val;
      let nextVal;
      let updated = false;

      let body = head.next;

      while (body) {
          nextVal = body.val;
          if (currVal < nextVal) {
              updated = true;
              break;
          }
          body = body.next;
      }

      let item = !updated ? 0 : nextVal;
      result.push(item);
      head = head.next
  }

  return result;
};

/*
Stats:
Runtime: 1876 ms, faster than 14.62% of JavaScript online submissions for Next Greater Node In Linked List.
Memory Usage: 45.9 MB, less than 84.62% of JavaScript online submissions for Next Greater Node In Linked List.
*/

var getVals = function(list) {
  const vals = [];
  let runner = list;

  while (runner) {
      vals.push(runner.val)
      runner = runner.next;
  }

  return vals;
}


var nextLargerNodes = function(head) {
  const vals = getVals(head);
  const res = [];

  for (let i = 0; i < vals.length; i++) {
      let curr = vals[i];
      let item = 0;

      for (let j = i + 1; j < vals.length; j++) {
          let next = vals[j];
          if (next > curr) {
              item = next;
              break;
          }
      }

      res.push(item);
  }

  return res;

};

/*
Stats:
Runtime: 372 ms, faster than 63.85% of JavaScript online submissions for Next Greater Node In Linked List.
Memory Usage: 46 MB, less than 55.38% of JavaScript online submissions for Next Greater Node In Linked List.
*/

