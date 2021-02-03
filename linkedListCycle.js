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

//Two pointer solution

var hasCycle = function(head) {
  if (!head) { return [] }
  function run(fast, slow) {
      if (!fast.next || !fast.next.next) { return false }
      if (fast.next === slow) {
          return true
      }
      return run(fast.next.next, slow.next);
  }

  return run(head, head);
};

/*
Stats:
Runtime: 100 ms, faster than 20.37% of JavaScript online submissions for Linked List Cycle.
Memory Usage: 41.4 MB, less than 25.59% of JavaScript online submissions for Linked List Cycle.
*/