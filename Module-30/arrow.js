// function add (a, b){
//     const result = a + b;
//     return result;
// }
function add (a, b){
    return a + b;
}
const sum = add(5, 90);
console.log(sum);

// same thing using function expression

const add2 = function(a, b){
    return a + b;
}
const sum2 = add2(15, 60);
console.log(sum2);

// same thing using arrow function
const add3 = (a, b) => a + b;
const sum3 = add3(20, 70);
console.log(sum3);

const add4 = (num1, num2, num3, num4) => (num1 * num2 * num3 * num4);
const multi = add4(10, 20, 30, 40);
console.log(multi);



