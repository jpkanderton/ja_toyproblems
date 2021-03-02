// findDuplicateFileInSystem.js
var findDuplicate = function(paths) {
  const results = {};

  for (let i = 0; i < paths.length; i++) {
      let pathAndFile = paths[i].split(' ');
      let root = pathAndFile[0];
      let files = [];
      for (var j = 1; j < pathAndFile.length; j++) {
          let file = pathAndFile[j];
          let rawFile = getRawFile(file);
          let cntnt = getContent(file);
          files.push(file);
          if (!results[cntnt]) {
              results[cntnt] = [];
          }
          results[cntnt].push([root, rawFile]);
      }
  }

  const finalResults = [];

  for (let key in results) {
      if (results[key].length > 1) {
          const innerArr = [];
          for (var z = 0; z < results[key].length; z++) {
              let finalRoot = results[key][z][0];
              let finalFile = results[key][z][1];
              finalRoot = finalRoot + '/';
              innerArr.push(finalRoot.concat(finalFile));
          }
          finalResults.push(innerArr);
      }
  }
  return finalResults;
};

var getContent = function(file) {
  let strt = file.indexOf('(') + 1;
  let end = file.indexOf(')');
  return file.slice(strt, end);
}

var getRawFile = function(file) {
  let end = file.indexOf('(');
  return file.slice(0, end);
}

/*
Runtime: 136 ms, faster than 72.54% of JavaScript online submissions for Find Duplicate File in System.
Memory Usage: 55.2 MB, less than 44.56% of JavaScript online submissions for Find Duplicate File in System.
*/