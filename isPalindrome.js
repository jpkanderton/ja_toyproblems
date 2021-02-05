var isPalindrome = function(head) {
  var f2b = [];
  var start = head;
  while (head) {
      f2b.push(head.val);
      head = head.next;
  }
  console.log('f2b: ', f2b);
  var i = f2b.length - 1;

  head = start;

  while (head) {
      console.log('head.val: ', head.val);
      console.log('f2b[', i, ']: ', f2b[i]);
      if (head.val !== f2b[i]) return false;
      i--;
      head = head.next;
  }

  return true;
};

/*
Stats:
Runtime: 216 ms, faster than 5.23% of JavaScript online submissions for Palindrome Linked List.
Memory Usage: 51.4 MB, less than 5.09% of JavaScript online submissions for Palindrome Linked List.
*/