function sum (a, b, c){             // These are parameters
    console.log(arguments);   // We only can write arguments in a function. This is called Arraylike Objects.
    console.log(arguments[3]); // Only we can access value from arraylike object but cant push, pop, shift...
    const args = [...arguments]; // This is the solution. We can make it Array and than anything can do as like array.
    const result = a + b + c;
    return result;
}
const total = sum(45, 89, 12, 45, 98, 56);  // These are arguments
console.log(total);


