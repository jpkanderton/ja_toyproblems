var mergeInBetween = function(list1, a, b, list2) {
  let rnnr = list1;
  let newTail, newHead;
  let list2Rnnr = list2;
  let list2Tail, list2Nxt;
  let count = 0;
  let nxt;

  while (count < a) {
      nxt = rnnr.next;
      newTail = rnnr;
      count++;
      rnnr = nxt;
  }

  while (count <= b) {
      nxt = rnnr.next;
      count++;
      rnnr = nxt;
  }


  while (list2Rnnr) {
      list2Nxt = list2Rnnr.next;
      list2Tail = list2Rnnr;
      list2Rnnr = list2Nxt;
  }

  newTail.next = list2;
  list2Tail.next = rnnr;

  return list1
};

/*
Stats:
Runtime: 216 ms, faster than 86.99% of JavaScript online submissions for Merge In Between Linked Lists.
Memory Usage: 51.6 MB, less than 30.89% of JavaScript online submissions for Merge In Between Linked Lists.
*/