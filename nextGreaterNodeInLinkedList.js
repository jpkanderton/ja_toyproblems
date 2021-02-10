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