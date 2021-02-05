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

var numComponents = function(head, G) {
  let curr, next;
  var set = new Set();
  G.forEach(item => set.add(item));

  let total = 0;

  while (head) {
      curr = set.has(head.val);
      next = (head.next) ? set.has(head.next.val) : false;
      if (curr && !next) total++;
      head = head.next;
  }
  return total;
};

/*
Stats:
Runtime: 96 ms, faster than 62.50% of JavaScript online submissions for Linked List Components.
Memory Usage: 43.7 MB, less than 37.50% of JavaScript online submissions for Linked List Components.
*/
