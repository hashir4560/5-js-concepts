//Spread Operator  and Destructuring

arr = [1, 2, 4, 6, 89];

function avg(a, b, c) {
  return a + b + c / 3;
}
// let a = avg(...arr);

let a = [4, 7, ...arr, 67];
console.log(a);
//If we increase the array but function takes only 3 nums in args so it will ignore rest of all.

//Concat
let a2 = [5, 7, 9];
let b = [...arr, ...a2];
console.log(b);
//Object

let obj1 = {
  name1: "hahsir",
  class1: "5",
  favLang: "JS",
};
// console.log(obj1);

let obj2 = { ...obj1, lang: "Python" };
console.log(obj2);

// let name1 = obj1.name;
// let class1 = obj1.class1;
// let favLang = obj1.favLang;

let { name1, class1, favLang } = obj1; //Destructuring

console.log(name1, class1, favLang);
