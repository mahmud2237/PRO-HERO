
/***
 * // There are two types of sort --->
 * //1. Ascending (smaller to larger)
 * //2. Descending (larger to smaller)
    ******Example******
 * // const numbers = [4, 5, 9, 3, 1, 2]
 * Ascending ---> smaller to larger: [1, 2, 3, 4, 5, 9]
 * Descending ----> larger to smaller: [9, 5, 4, 3, 2, 1]
 */
const persons = ['rakib', 'nokib', 'sakib', 'akib', 'dakib'];
const sortedPersons = persons.sort();
console.log(sortedPersons);

console.log('<--------Another Example is-------->');

const numbers = [4, 7, 2, 3, 8, 1, 9];
const srt_numbers = numbers.sort();
console.log(srt_numbers);

console.log('<-------- when we will use sort(), sometimes we face problem like below: -------->');
const Num = [2, 34, 4, 46, 1, 75, 7, 14]
const Err_Num = Num.sort();
console.log(Err_Num); 
console.log('<--Now, Error occurs in sort(), so we have to fix it by using (function (a, b){return a - b} -->');
const asc_Num = Num.sort(function (a, b){   // for descending order: (function (a, b){ return b - a})
    return a - b; //For ascending order 
})
console.log(asc_Num);
const dsc_num = [...Num].sort(function(a, b){return b - a});
console.log(dsc_num);









