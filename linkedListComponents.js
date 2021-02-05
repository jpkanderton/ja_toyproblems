var numComponents = function(head, G) {
  let curr, next;
  let total = 0;
  let conn = false;

  while (head) {
      curr = G.indexOf(head.val);
      next = (head.next) ? G.indexOf(head.next.val) : -1;
      if (curr !== -1 && next === -1) total++;
      head = head.next;
  }
  return total;
};

/*
Stats:
Runtime: 416 ms, faster than 6.94% of JavaScript online submissions for Linked List Components.
Memory Usage: 41.4 MB, less than 98.61% of JavaScript online submissions for Linked List Components.
*/