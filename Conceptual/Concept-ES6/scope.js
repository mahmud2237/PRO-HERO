// 1. global scope
// 2. block scope
// 3. functional scope
/** global scope Example
const x = 5;
console.log(x);

if(true){
    console.log(x);
}

function global(){
    console.log(x);
}
global();
*/

/** Block Scope 
{
    let x = 7;
    console.log(x);
}
console.log(x); // This x is defined in blocked scope. so, it will give us the ReferenceError.
*/

/** Functional Scope */
const x = NaN;
function show(){
    let x = 10;
    console.log(x);
}

show(); // We called the functional scoped x value which is 10
console.log(x); // here it will follow the global scoped x variable which is Nan



