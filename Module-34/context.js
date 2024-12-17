let a = 5;  // global context
function add(num1, num2){  // functional context
    const result = num1 + num2 + a;
    return result;
}

let sum = add(10, 15);
console.log(sum);


