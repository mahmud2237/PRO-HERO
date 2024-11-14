const readLine = require('prompt-sync')();
const Str = String(readLine('Enter the word: '));
function isPalindrome(Str) {
    const cleaned_Str = Str.toLowerCase();
    const reversed_Str = cleaned_Str.split('').reverse().join('');
    return cleaned_Str === reversed_Str;
}
checkPalindrome = isPalindrome(Str);
console.log(checkPalindrome);