// Below these are strongly typed languages examples
// int a = 5;
// string b = 'hau mau khau';
// bool c = True;
// object student = {name: 'Balam', id: 55}
// int[] numbers = [12, 45, 78]
// string[] friends = ['abul', 'bablu']

// But javaScript is dynamic typed language. Like:
// Premitive type always contain only one value in variable
const a = 5;
const b = 'Samsu kopai na akhon';
const d = true;

// Non-premitive type always has a lot of values in variable. They always keeps there references
const ages = [45, 65, 78];
let student = {name: 'Balam', id: 55};

console.log(typeof a, typeof b, typeof d, typeof ages, typeof student);

let x = 5;
let y = x;
console.log(x, y);
y = 7;
console.log(x, y);

let p = {job: 'web developer'}
let q = p; // now q and p is taking the same places
// if we assign it just selecting an portion of it in Array, Object than it will change the both values 
q.job = 'FrontEnd developer'; 
console.log(p, q);
// Now assign it totally separately so the q's value will be different of p
q = {job: 'BackEnd developer'}  
console.log(p, q);






