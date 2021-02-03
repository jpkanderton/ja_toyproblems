var detectCycle = function(head) {
  var map = new Map();
  while (head !== null) {
      if (map.has(head)) return head;
      map.set(head, true);
      head = head.next;
  }
  return null;
};


/*
Stats:
Runtime: 100 ms, faster than 23.58% of JavaScript online submissions for Linked List Cycle II.
Memory Usage: 41.9 MB, less than 9.75% of JavaScript online submissions for Linked List Cycle II.
*/
