var isPalindrome = function(head) {
  var f2b = [];
  var start = head;
  while (head) {
      f2b.push(head.val);
      head = head.next;
  }
  var i = f2b.length - 1;

  head = start;

  while (head) {
      if (head.val !== f2b[i]) return false;
      i--;
      head = head.next;
  }

  return true;
};

/*
Stats:
Runtime: 88 ms, faster than 58.78% of JavaScript online submissions for Palindrome Linked List.
Memory Usage: 42.8 MB, less than 43.34% of JavaScript online submissions for Palindrome Linked List.
*/