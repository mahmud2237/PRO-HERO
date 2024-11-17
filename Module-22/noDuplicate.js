/***
 * array has some duplicate elements
 * []
 */

const biryaniKhor = ['abulla', 'kabulla', 'mokbulla', 'babulla', 'abulla', 'kabulla', 'mokbulla', 'cabulla'];
const numbers = [1, 4, 5, 3, 7, 8, 5, 3, 9];

function noDuplicate(array){
    // console.log(array);
    const unique = [];
    for(const arr of array){
        if(!unique.includes(arr)){
            unique.push(arr);
        }
    }
    return unique;

}
const uniqueArray = noDuplicate(biryaniKhor);
console.log(uniqueArray);
const uniqueNum = noDuplicate(numbers);
console.log(uniqueNum);

const lowerToHigher = Math.min(...uniqueNum);
console.log(lowerToHigher);

const higherToLower = Math.max(...uniqueNum);
console.log(higherToLower);


















