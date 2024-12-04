function add(num1, num2){
    console.log(num1, num2);
    console.log(arguments);
    console.log(arguments[4]);
}
add(12, 13, 45, 89, 78);
console.log(`Arguments is Not Array but it's an ArrayLike Object`);


