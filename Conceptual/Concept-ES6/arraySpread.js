const arr1 = [1, 2, 3];
const arr2 = arr1;

// arr1.push(50);
// arr1.push(60);
// console.log(arr2);  // push in arr1 but get those push value in arr2 and arr1 because they located on the same memory

// arr2.push(55);
// arr2.push(65);
// console.log(arr1); // push on the arr2 but get those in arr1 and arr2 because they located on the same memory

// to avoid this copy we need to use of spread operator (...arr1 or ...arr2)
const array1 = [1, 2, 5, 6];

// before ES6 we need to copy that to like below
const array2 = []
for(let item of array1){
    array2.push(item);
}
console.log(array2); // [1, 2, 5, 6]

// After using ES6 spread operator it's just one line of code
const array3 = [...array1];
console.log(array3); // [1, 2, 5, 6]





