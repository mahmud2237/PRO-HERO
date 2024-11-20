/***
 * Write a function of code which will help a freelancer to calculate his/her savings end of the month. There will
 * be two input type. One is all income which is an array value and the other is living cost. If his income is more 
 * than 3000 than add 20% tax to it and count his total income. Finally, find the monthly savings using the income 
 * value and living cost. if savings is more than 0 than show the value on the screen, if less than 0 than show 
 * 'earn more' on the screen, if income input isn't an array and living cost isn't a number than show 'invalid 
 * input' on the screen.
 * input: [1000, 2000, 2500], 5000             Output: 500
 * input: [900, 2700, 3400], 10000             Output: earn more
 * input: 100, [900, 2700, 3400]               Output: invalid input
 */

function monthlySavings(arr, livingCost){
    if(!Array.isArray(arr) || typeof livingCost !== 'number'){
        return 'Invalid input';
    }
    let totalIncome = 0;
    for(let income of arr){
        if(income >= 3000){
            let tax = income * 0.2;
            totalIncome += income - tax; 
        }else{
            totalIncome += income;
        }
    }
    let savings = totalIncome - livingCost;
    if(savings >= 0)
    {
        return savings;
    }else{
        return 'Earn more';
    }
    // We can return the savings using only one line of code or using ternary operator
    // return savings >= 0? savings : 'Earn more';
}
console.log(monthlySavings([1000, 2000, 2500], 5000));  // 500 
console.log(monthlySavings([900, 2700, 3400], 10000));  // -3680 which is < 0 so, Earn more
console.log(monthlySavings(100, [900, 2700, 3400]));    // invalid input
console.log(monthlySavings([4800, 3500, 3400], 11000)); // -1640 which is < 0 so, Earn more







