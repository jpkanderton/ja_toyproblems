var detectCycle = function(head) {
  var map = new Map();
  while (head !== null) {
      if (map.has(head)) return head;
      map.set(head, true);
      head = head.next;
  }
  return null;
};