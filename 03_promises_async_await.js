// let fs = require("fs");

// fs.readFile("file.txt", "utf-8", (err, data) => {
//   console.log(err, data);
// });

// console.log("This is eof");

let fs = require("fs/promises");

const readThreeFiles = async (file1, file2, file3) => {
  let a1 = fs.readFile(file1, "utf-8");
  let a2 = fs.readFile(file2, "utf-8");
  let a3 = fs.readFile(file3, "utf-8");

  let c1 = await a1;
  console.log(c1);
  let c2 = await a2;
  console.log(c2);
  let c3 = await a3;
  console.log(c3);
};

let a = fs.readFile("file.txt", "utf-8");
a.then((data) => {
  console.log(data);
});
console.log("this is eof");

readThreeFiles("file1.txt", "file2.txt", "file3.txt");
