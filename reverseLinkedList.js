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