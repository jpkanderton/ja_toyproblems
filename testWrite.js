const fs = require('fs');

const cbWriteFile = (err) => {
  if (err) return console.log('err: ', err);
  console.log('success in fs.writeFile');
}

const cbAppendFile = (err) => {
  if (err) return console.log('err: ', err);
  console.log('succes in fs.appendFile');
}

var data = '';
var options;


fs.writeFile('11_johnTest.js', data, cbWriteFile);
fs.appendFile('11_johnTest.js', 'added data', cbAppendFile);
fs.appendFile('11_johnTest.js', 'added more data', cbAppendFile);
fs.appendFile('11_johnTest.js', 'added even more data1', cbAppendFile);


