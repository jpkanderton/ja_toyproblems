var reverseList = function(head) {
  var result = null;
  while (head) {
      result = (!result) ? {val: head.val, next: null} : {val: head.val, next: result}
      head = head.next;
  }
  return result;
};

/*
Stats:
Runtime: 108 ms, faster than 10.78% of JavaScript online submissions for Reverse Linked List.
Memory Usage: 40.8 MB, less than 17.79% of JavaScript online submissions for Reverse Linked List.
*/

var reverseList = function(head) {
  if (!head) return null;

  var result;

  function rev(head) {
      result = (!result) ? {val: head.val, next: null} : {val: head.val, next: result};
      if (head.next !== null) rev(head.next);
  }
  rev(head);
  return result;
};

/*
Stats:
Runtime: 76 ms, faster than 95.94% of JavaScript online submissions for Reverse Linked List.
Memory Usage: 41.3 MB, less than 6.27% of JavaScript online submissions for Reverse Linked List.
*/