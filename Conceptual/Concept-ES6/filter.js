const numbers = [12, 32, 25, 75, 13, 54, 97, 25];

const result = numbers.filter((a) => a > 50);
console.log(result);
console.log(!!result);  // check the value is true/false
// we always get truthy value in filter. If didn't find any value than we will get [], which is truthy we know that.
const result1 = numbers.filter((item) => item > 500);
console.log(result1);
console.log(!!result1); // check the value is true/false


