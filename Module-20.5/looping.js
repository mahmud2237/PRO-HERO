/***
 * Looping Technique
 * 1. for loop
 * 2. while loop
 * 3. do while --> ignore
 * 4. for of --> array loop korar jonno
 * 5. for in --> object loop korar jonno
 * 
 */

//Use for...of for the array
const friends = ['Elon', 'Bill', 'Mark', 'Waren'];
for (const friend of friends){
    console.log('Using for...of the output is: ', friend);
}
console.log('<--------Another Way-------->')
for (let i = 0; i < friends.length; i++){
    console.log('Using for loop the output is:', friends[i]);
}
console.log('<--------Other Way-------->')
let n = 0;
while(n < friends.length){
    console.log('Using while loop the output is:', friends[n]);
    n++;
}

console.log('<--------Next-------->')

//Use for...in for the object
const cars = {
    name: 'BMW',
    model: 'X5',
    year: 2021,
    isGood: true
}

for (const key in cars){
    console.log('Using for...in the output is: ', key, ':', cars[key]);
}







