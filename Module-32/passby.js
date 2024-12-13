let num1 = 5;
let num2 = 7;

function multiply(a, b){
    a = 27;
    const result = a * 7;
    return result;
}
const output = multiply(num1, num2);
console.log(output);


let student1 = {name: 'Jalil', partner: 'borsha'}
let student2 = {name: 'Raj', partner: 'anika'}

function makeMovie(couple1, couple2){
    couple1.name = 'Ononto';
    couple2.partner = 'Mim';
}
console.log(student1, student2);
makeMovie(student1, student2); // Here change the value to call the makeMovie function
console.log(student1, student2);






