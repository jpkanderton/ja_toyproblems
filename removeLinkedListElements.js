// removeLinkedListElements.js

var removeElements = function(head, val) {
  var runner = head;
  var previous, next;

  while (runner) {
      next = runner.next;
      if (runner.val === val) {
          if (!previous) {
              head = next, runner = next;
              continue;
          }
           previous.next = next;
      } else {
          previous = runner;
      }
      runner = next;
  }
  return head;
};

/*
Stats:
Runtime: 92 ms, faster than 90.07% of JavaScript online submissions for Remove Linked List Elements.
Memory Usage: 43.7 MB, less than 17.40% of JavaScript online submissions for Remove Linked List Elements.
*/