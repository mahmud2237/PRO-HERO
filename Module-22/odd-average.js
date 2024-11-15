/**
 * function takes an array as parameter
 * give me the average of the odd numbers in the array
 */

function oddAverage(num) {
    // console.log(num);
    let odds = [];
    let sum = 0;
    let totalOddNum = 0;
    
    for (let i = 0; i < num.length; i++) {
        if (num[i] % 2 === 1) {
            odds.push(num[i]);  // add the odd number to the odds array
            sum += num[i];
            totalOddNum++;
        }
    }
    console.log(odds);
    // calculate the average of the odd numbers in the array
    let average = sum / totalOddNum;
    return average;
}
// test cases
const num = [42, 13, 58, 65, 81];  // 53
const avg = oddAverage(num);
console.log('Average of the odd numbers is: ', avg);











