const readLine = require('prompt-sync')();
//--------------------------------------------------------
const sentence = 'I am learning Web Dev.';
let reverse = '';
for( let letter of sentence){
    // console.log(letter);
    reverse = letter + reverse;
}
console.log(reverse);
//--------------------------------------------------------
// Reverse using for loop and using length
const sentence1 = String(readLine('Enter your sentence1 Here: '));
let rev = '';
for (i = 0; i < sentence1.length; i++){
    let letter = sentence1[i];
    // console.log(letter);
    rev = letter + rev;
}
console.log(rev);
//--------------------------------------------------------
//Reverse using the split, reverse and join 
const sentence2 = String(readLine('Enter your sentence2 Here: '));

// const reversed = sentence2.split('').reverse().join(); 
const reversed = sentence2.split('').reverse().join('');
console.log(reversed);

