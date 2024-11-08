const readLine = require('prompt-sync')();
/*
const number = parseInt(readLine('Enter a Number: '));
if (number < 10){
    console.log("The number is less than 10");
}
console.log('something else is cooking');
*/

let num = parseInt(readLine('Enter a Number(0 - 10): '));
if(num <= 10){
    while(num <= 10){
        console.log('Hey', num);
        num++;
    }
}else{
    console.log('Num is grater than 5');
}












