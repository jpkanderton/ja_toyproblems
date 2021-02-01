var maxArea = function(height) {
  var right = height.length - 1;
  var largestArea = 0;
  for (var left = 0; left < height.length; left++) {
      var leftVal = height[left];
      var rightVal = height[right]
      var currentArea = getArea([left, leftVal], [right, rightVal]);
      if (largestArea < currentArea) {
          largestArea = currentArea;
      }
      if (leftVal > rightVal) {
          right--;
          left--;
      }
  }
  return largestArea;
};

var getArea = function(pointA, pointB) {
  var height = pointB[0] - pointA[0];
  var width = Math.min(pointB[1], pointA[1]);
  return height * width;
}