var levelOrderBottom = function(root) {
  if (!root) { return [] }
  var queue = [[root, 0]];
  var levels = [];
  var map = new Map();

  while (queue.length) {
      // console.log('queue: ', queue);
      var curr = queue.shift();
      var currHeight = curr[1]
      var currNode = curr[0];
      if (currNode.left !== null) { queue.push([currNode.left, currHeight + 1]) };
      if (currNode.right !== null) { queue.push([currNode.right, currHeight + 1]) };
      console.log('currNode.val: ', currNode.val)
      if (map.has(currHeight)) {
          var arr = map.get(currHeight);
          arr.push(currNode.val);
          map.set(currHeight, arr);
      } else {
          map.set(currHeight, [currNode.val])
      }
  }
  // console.log(map);
  var result = [];
  for (var i = map.size - 1; i >= 0; i--) {
      var item = map.get(i);
      result.push(item);
  }


  return result;

};