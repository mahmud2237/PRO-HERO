const readLine = require('prompt-sync')();

function squaretheNum(s){
    return s * s;
}
console.log(squaretheNum(String(readLine('Enter a num: '))));