const testArrNum = [9, 10, 6, 16, 17];
const testArrLet = ['a', 'b', 'c', 'd', 'e'];
const testObj = {a: 9, b: 10, c: 6, d: 11, e: 17};

console.log('orginal array before: ', testArrNum);

const newArr = testArrNum.filter((item, indx, arr) => {
  arr[indx] = item + 22;
  return (item % (indx + 1)) === 0
})

console.log('orginal array after: ', testArrNum);
console.log('new array: ', newArr);