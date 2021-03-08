// rangeSumOfBst.js

var rangeSumBST = function(root, low, high) {
  var sum = 0;

  var recurse = function(node, low, high) {
      if (node.val >= low && node.val <= high) {
          sum += node.val;
      }
      if (node.left) recurse(node.left, low, high);
      if (node.right) recurse(node.right, low, high);
  }

  recurse(root, low, high);

  return sum;
};

/*
Stats:
Runtime: 240 ms, faster than 39.24% of JavaScript online submissions for Range Sum of BST.
Memory Usage: 68.2 MB, less than 54.27% of JavaScript online submissions for Range Sum of BST.
*/