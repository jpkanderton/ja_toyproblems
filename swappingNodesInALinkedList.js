var swapNodes = function(head, k) {
  if (!head) return null;
  if (!head.next) return head;

  var runner = head;
  var nodes = [];

  while (runner) {
      nodes.push(runner);
      runner = runner.next;
  }

  var indexA = Math.min(k - 1, nodes.length - k);
  var indexB = Math.max(k - 1, nodes.length - k);


  var nodeA = nodes[indexA];
  var nodeAPar = (indexA - 1) >= 0 ? nodes[indexA - 1] : null;
  var nodeAChi = (indexA + 1) < nodes.length ? nodes[indexA + 1] : null;
  var nodeB = nodes[indexB];
  var nodeBPar = (indexB - 1) >= 0 ? nodes[indexB - 1] : null;
  var nodeBChi = (indexB + 1) < nodes.length ? nodes[indexB + 1] : null;


  if (nodeA !== nodeB && nodeA.next !== nodeB) {
      if (!nodeAPar) {
          head = nodeB;
      } else {
          nodeAPar.next = nodeB;
      }
      nodeB.next = nodeAChi;
      nodeBPar.next = nodeA;
      nodeA.next = nodeBChi;
  } else if (nodeA !== nodeB && nodeA.next === nodeB) {
      if (!nodeAPar) {
          head = nodeB;
      } else {
          nodeAPar.next = nodeB;
      }
      nodeB.next = nodeA;
      nodeA.next = nodeBChi;
  }

  return head;
};

/*
Stats:
Runtime: 856 ms, faster than 7.95% of JavaScript online submissions for Swapping Nodes in a Linked List.
Memory Usage: 73.8 MB, less than 86.30% of JavaScript online submissions for Swapping Nodes in a Linked List.
*/