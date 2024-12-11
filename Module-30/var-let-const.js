// No reason to use var.
// always we will use let. So, if needs than we can reassign it later.
// when we need to assign it permanently, there will use const.
// let and const are block-scoped. This means they are only accessible within the block where 
// they are defined.
const money = 25;
// money = 30; // This will throw an error. Because we can't reassign const variable.
const rich = money + 25;
console.log(rich);


let count = 0;
count = count + 15;
console.log(count);

const numbers = [23, 15, 65, 45, 32];
numbers[1] = 55;
numbers.unshift(8, 9); // This will not throw an error. Because we can't change array elements.
numbers.push(37 , 50); // This will not throw an error. Because we can't change array elements.
console.log(numbers);


