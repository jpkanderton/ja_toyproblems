var removeNthFromEnd = function(head, n) {
  let node = head;
  const nodes = [];

  var prv = null;

  while (node) {
      let nxt = node.next;
      nodes.unshift(node);
      node = nxt;
  }

  if (n === nodes.length) return head.next;

  nodes[n].next = nodes[n - 1].next;
  return head;
};

/*
Stats:
Runtime: 76 ms, faster than 95.51% of JavaScript online submissions for Remove Nth Node From End of List.
Memory Usage: 40.1 MB, less than 63.74% of JavaScript online submissions for Remove Nth Node From End of List.
*/