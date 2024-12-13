/**
   There are 8 ways to get Undefined. Which is below with examples:
    1. variable that is not initialized will give undefined
    2. function with no return will give undefined
    3. when we call the function, but some parameter is not presented there will get undefined
    4. if return has nothing on the right side than it will give us undefined 
    5. property that doesn't exist on an object will give undefined
    6. accessing an array index that doesn't exist on an array will give undefined
    7. deleting an element inside an array
    8. 
 */


// 1. var is not defined will give undefined
let first;
console.log(first);

// 2. function with no return will give undefined
function second(a, b){
    const total = a + b;
}
const result = second(3, 6);
console.log(result);

// 3. when we call the function, but some parameter is not presented there will get undefined 
function third(a, b, c, d){
    const total = a + b + c + d;
    console.log(a, b, c, d);
}
third(2, 5);

// 4. if return has nothing on the right side than it will give us undefined
function noNegative (a, b){
    if(a < 0 || b < 0){
        return    // here didn't tell anything so will get undefined if a or b any of them is negative
    }
    return a + b;
}
const total = noNegative(2, -5);
console.log(total);

// 5. property that doesn't exist on an object will give undefined
const fifth = {id: 2, name: 'prothom', age: 40}
console.log(fifth.age, fifth.salary); // here salary property isn't given so it will be undefined

// 6. accessing an array index that doesn't exist on an array will give undefined
const sixth = [1, 2, 3];
console.log(sixth[1] ,sixth[30], sixth[200]); // here index 30 and 200 doesn't exist so it will be undefined

// 7. deleting an element inside an array
const seventh = [2, 3, 4, 5, 7]
delete seventh[1]; // we shouldn't remove using 'delete'. Instead use 'splice' to remove something. 
console.log(seventh); // here index 1 is deleted so it will be [2, undefined or <1 empty item>, 4, 5, 7]


// 8. set a value directly to undefined
const eighth = undefined;
const ninth = null;
const data = {results: [], updated: null}

console.log(typeof undefined);
console.log(typeof null);












