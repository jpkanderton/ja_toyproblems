var hasCycle = function(head) {
  var map = new Map();
  while (head !== null) {
      if (map.has(head)) { return true}
      map.set(head, true);
      head = head.next
  }
  return false;
};

/*
Stats:
Runtime: 220 ms, faster than 6.04% of JavaScript online submissions for Linked List Cycle.
Memory Usage: 48.9 MB, less than 5.19% of JavaScript online submissions for Linked List Cycle.
*/