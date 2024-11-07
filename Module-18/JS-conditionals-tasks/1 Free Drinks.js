/***

Free Drinks
    - Burger more than 500tk: free Coke
    - Else Coke: 30tk
*/
var prompt = require('prompt-sync')();
var burgerPrice = parseInt(prompt('Enter burger price: '));
if(burgerPrice > 500){
    console.log('Free Coke');
}
else{
    console.log('Coke 30tk');
}