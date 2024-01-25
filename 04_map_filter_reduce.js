//Jvascript map

// var a = [1, 2, 3, 4, 5];

// let a2 = a.map((value) => {
//   return value + 6;
// });
// console.log(a2);

var a = [1, 2, 3, 4, 5];

let a2 = a.map((value) => {
  return value * 2;
});
console.log(a, a2);

var c = [2, 8, 9, 0, 8, 7];

let c2 = c.map((num) => {
  return num * 3;
});
console.log(c2);

//Javascript filter

var filterArr = [2, 4, 6, 8, 10, 17, 88, 90, 67, 78];

let result = filterArr.filter((value) => {
  return value > 10;
});
console.log(filterArr, result);

//Javascript reduce

let reduceArr = [1, 6, 8, 9, 12];

let result1 = reduceArr.reduce((val1, val2) => {
  return val1 + val2;
  // return val1*val2
});
console.log(result1);
