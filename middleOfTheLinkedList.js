var middleNode = function(head) {
  if (!head) return null;

  const arr = [];
  let rnnr = head;

  while (rnnr) {
      let nxt = rnnr.next;
      arr.push(rnnr);
      rnnr = nxt;
  }

  const indx = Math.ceil((arr.length - 1) / 2);
  return arr[indx];
};

/*
Stats:
Runtime: 72 ms, faster than 90.56% of JavaScript online submissions for Middle of the Linked List.
Memory Usage: 38.7 MB, less than 10.71% of JavaScript online submissions for Middle of the Linked List.
*/