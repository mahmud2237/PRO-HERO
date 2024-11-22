const numbers = [2, 4, 23, 12, 34, 7, 9]

function bigNum (numbers1){
    let max = numbers1[0];
    for(let i = 1; i < numbers1.length; i++){
        if(numbers1[i] > max){
            max = numbers1[i];
        }
    }
    return max;
}
console.log(bigNum(numbers));
console.log("---------- Try another way ----------")
// function maxNum(number){
//     let maxNum = number[0];  // initialize maxNum with the first number in the array
//     for(let num of number){
//         if(num > maxNum){
//             maxNum = num;
//         }
//     }
//     return maxNum; // return the maximum value in the array
// }

// console.log(maxNum(numbers));