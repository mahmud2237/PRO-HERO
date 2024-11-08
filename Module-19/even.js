let readLine = require('prompt-sync')();
let num = parseInt(readLine('Enter a number(0 - 10): '));
let count = 0;
while(num <= 10){
    console.log(num);
    if(num % 2 === 0){
        console.log('Even number: ', num);
        count++;
    }
    num++;
}

console.log('Total even numbers: ', count);