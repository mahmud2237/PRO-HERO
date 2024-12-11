const actor = {
    name: 'Rohan',
    age: 30,
    phone: '0172838484',
    money: 21329329493,
}
/* We can do this by destructuring...which is below
const phone = actor.phone;
const name = actor.name;
const age = actor.age;
*/

// if right sight is a object left side of destructuring will be object as well
// use property name as a variable that contains the property value
const {phone, age} = actor; //object destructuring
console.log(phone);
console.log(phone);
console.log(age);
console.log(age);



// array destructuring
const numbers = [3, 4, 65, 2, 34, 56, 78];
const [first, second,...rest] = numbers;

console.log(first);
console.log(second);


// advance destructuring
const do





















