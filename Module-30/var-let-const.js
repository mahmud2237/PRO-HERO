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
// numbers = [12, 34, 53] // This will throw an error. Because we can't change value with const variable.
numbers[1] = 55;
numbers.unshift(8, 9); // This will not throw an error. Because we can't change array elements.
numbers.push(37 , 50); // This will not throw an error. Because we can't change array elements.
console.log(numbers);


//for object // This is also same. if we use const than it will throw error if we want to reassign vaiable.
const student = {
    name: 'John',
    age: 25,
    city: 'New York'
}

// if we need to reassign value in the variable than we need to use let instead of const.