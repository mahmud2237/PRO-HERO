const numbers = [1, 2, 3, 4, 5];
// we can do these using reduce method below:
// arr.reduce((previous, current) => {previous + current}, initial value);

// let sum = 0;
// for(let item of numbers){
//     sum += item;
// }
// console.log(sum);
// Or using reduce,
const sum = numbers.reduce((prev, current) => prev + current, 0);
console.log(sum);
/***
   0 + 1 = 1  // if you given an initial value 0
   1 + 2 = 3
   3 + 3 = 6
   6 + 4 = 10
  10 + 5 = 15
*/

// let multi = 1;
// for(let item of numbers){
//     multi *= item;
// }
// console.log(multi);
// Or using reduce,
const multi = numbers.reduce((prev, current) => prev * current, 1);
console.log(multi);

/*** 
// for multi we know if we give initial value 0 than it will be a curse and output will be 0
   1 * 1 = 1  // if you given an initial value 1 
   1 * 2 = 2
   2 * 3 = 6
   6 * 4 = 24
  24 * 5 = 120
*/

// if we didn't given initial value than it won't work in object
const obj = [{ a: 1 }, { a: 2 }, { a: 3 }, { a: 4 }];
const totalObj = obj.reduce((prev, current) => prev + current.a, 0);
console.log(totalObj);
const multiObj = obj.reduce((prev, current) => prev * current.a, 1);
console.log(multiObj)

