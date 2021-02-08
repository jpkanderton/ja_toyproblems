function convertFileName(fileName) {
  console.log(`Input: ${fileName}`);
  var nameArr = fileName.split('/')[4].split('-');
  var resultArr = nameArr.map(capFirstLet);
  var output = resultArr.join('').concat('.js');
  console.log(`Output: ${output}`);
  return output;
}

function capFirstLet(word, index) {
  if (index === 0) return word;

  var first = word[0].toUpperCase();
  var rest = word.slice(1, word.length);

  return first.concat(rest);
}

var fileName = 'https://leetcode.com/problems/odd-even-linked-list/';
convertFileName(fileName);