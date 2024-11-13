const numbers = [1, 2, 3, 4, 5, 6, 7];

// Using reverse Method:
// numbers.reverse();
// console.log(numbers);
console.log('<--------Another Way using for...of -------->');
const rev_numbers = [];
for(const num of numbers){
    //console.log(num);
    rev_numbers.unshift(num);
}
console.log(rev_numbers);

console.log('<--------Another Way using incremental for loop -------->');

let n = [];
for (let i = 0; i < numbers.length; i++){
    // console.log(numbers[i]);
    n.unshift(numbers[i]);
}
console.log('Using for loop and unshift method: ',n);

console.log('<--------Another Way using decremental for loop also -------->');

let m = [];
for (let j = numbers.length - 1; j >= 0; j--){
    //console.log(numbers[j]);
    m.push(numbers[j]);
}
console.log('Using for loop and push method: ', m);

console.log('<-------- Ended -------->');



