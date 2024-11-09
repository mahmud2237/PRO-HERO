const numbers = [10, 15, 20, 30];
/* Iterate over this array and find the total sum. */

// Solutions below:
/*
let total = numbers[0] + numbers[1] + numbers[2] + numbers[3];
console.log(total); 
*/
//I have done this upper code. Here below is few other approaches:

//The using of reduce() method is a powerful way to accumulate values in an array. It applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value.
/*
const total = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(total);
*/

//The using of forEach() method executes a provided function once for each array element. This can also be used to calculate the sum.
/*
let total = 0;
numbers.forEach(nums =>{
    total += nums;
});
console.log(total);
*/

//The for...of loop provides a simpler syntax for iterating over iterable objects like arrays.
/*
let total = 0;
for (const nums of numbers){
    total += nums;
}
console.log(total);
*/

//Using the most common approaches like for Loop...
/*
let total = 0;
for (let i = 0; i < numbers.length; i++){
    total += numbers[i];
}
console.log(total);
*/

// Using the most common approaches like while loop...

let total = 0;
let i = 0;
while(i < numbers.length){
    total += numbers[i];
    i++;
}
console.log(total);





















