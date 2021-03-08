// findACorrespondingNodeOfABinaryTreeInACloneOfThatTree.js

var getTargetCopy = function(original, cloned, target) {
  if (!cloned) return;
  if (cloned.val === target.val) return cloned;
  return getTargetCopy(original, cloned.left, target) || getTargetCopy(original, cloned.right, target)
};

/*
Stats:
Runtime: 320 ms, faster than 42.35% of JavaScript online submissions for Find a Corresponding Node of a Binary Tree in a Clone of That Tree.
Memory Usage: 59.3 MB, less than 89.31% of JavaScript online submissions for Find a Corresponding Node of a Binary Tree in a Clone of That Tree.
*/