var oddEvenList = function(head) {
  if (!head) return null;

  var oddRnnr = head;
  var evenRnnr = head.next;
  var frstEven = head.next;
  var nxtOdd, nxtEven;

  while (oddRnnr.next && oddRnnr.next.next) {
      nxtOdd = oddRnnr.next.next;
      nxtEven = evenRnnr.next.next;

      oddRnnr.next = nxtOdd;
      evenRnnr.next = nxtEven;

      oddRnnr = nxtOdd;
      evenRnnr = nxtEven;
  }

  oddRnnr.next = frstEven;
  return head;
};

/*
Stats:
Runtime: 96 ms, faster than 41.46% of JavaScript online submissions for Odd Even Linked List.
Memory Usage: 40.8 MB, less than 75.90% of JavaScript online submissions for Odd Even Linked List.
/*