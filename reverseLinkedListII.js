var reverseBetween = function(head, m, n) {
  var runner = head;
  var cntr = 1;
  var prvs, nxt;
  var tailOfSt;

  while (cntr < m) {
      nxt = runner.next;
      tailOfSt = runner;
      runner = nxt;
      cntr++;
  }

  var strtRvrsd, rvrsd, lstRvrsd;

  while (cntr >= m && cntr <= n) {
      nxt = runner.next;
      if (!rvrsd) {
          rvrsd = runner;
          rvrsd.next = null;
          strtRvrsd = rvrsd;
      } else {
          lstRvrsd = rvrsd;
          rvrsd = runner;
          rvrsd.next = lstRvrsd;
      }
      runner = nxt
      cntr++
  }

  strtRvrsd.next = runner;

  if (tailOfSt) {
      tailOfSt.next = rvrsd;
      return head;
  } else {
      return rvrsd
  }
};

/*
Stats:
Runtime: 68 ms, faster than 98.96% of JavaScript online submissions for Reverse Linked List II.
Memory Usage: 39 MB, less than 10.57% of JavaScript online submissions for Reverse Linked List II.
*/