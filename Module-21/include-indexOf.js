const things = ['pen', 'ben', 'chen', 'fan'];
const joins = things.includes('ben');
console.log(joins);

const index = things.indexOf('chen');
console.log(index); // Output: 2
const index1 = things.indexOf('hello');
console.log(index1); // Output: -1 (since 'hello' is not found in the array)