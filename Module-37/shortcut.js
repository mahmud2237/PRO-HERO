
// Truthy: 'almas', true, 5, {}, []
// Falsy: '', 0, false, null, undefined
let myVar = 5;
// That's how check the truthy value
if(myVar){
    myVar = myVar * 100;
    console.log(!!myVar, myVar);   
}else{
    myVar = 0;
}

// now check negetive, zero or falsy any values
let myMoney = 0;
if(!myMoney){
    console.log(!!myMoney, 'I am goribs');
}else{
    console.log(!myMoney, 'Beleive me, I was boroloks!');
}


// const money = 80;
// let food;
// if(money > 100){
//     food = 'biriyani';
//     // console.log(food);
// }else{
//     food = 'cha biscuit';
//     // console.log(food);
// }
// console.log(food);

// Upper these code write in the ternary operator
let money = 80;
let food = money > 100 ? 'biriyani' : 'cha biscuit';
console.log(food);

// another ternary example
let drink = (money > 100 && myVar > 100) ? 'coke' : 'filter water';
console.log(drink);

// convert number to string
const num = 53;
console.log(typeof num, num);
const numStr = num + '';  // easy way to convert any num to str
console.log(typeof numStr, numStr);

// convert str to number
const str = '5465';
console.log(typeof str, str);
const strNum = +str;
console.log(typeof strNum, strNum);

// suppose you have an truthy value then you can use ternary operator like below
let isActive = true;
const showUser = () => console.log('display user');
const hideUser = () => console.log('hide user');
isActive ? showUser() : hideUser();   
// use && // isActive && showUser(); // use && if the left side is truthy //
// use || // isActive || hideUser(); // use || if the left side is falsy //

// again we will reassign the isActive to false
isActive = !isActive;
console.log(isActive);
