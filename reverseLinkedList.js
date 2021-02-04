var reverseList = function(head) {
  var result = null;
  while (head) {
      result = (!result) ? {val: head.val, next: null} : {val: head.val, next: result}
      head = head.next;
  }
  return result;
};