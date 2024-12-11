const first = 'Jaan';
const last = 'pakhi';
const greet = 'potas potas?'
const name = first + ' ' + last + " " + greet;
console.log(name);

const a = 10;
const b = 20;
// const result = 'The sum of' + a + ' and ' + b + ' is ' + (a+b); // This is so difficult
const result = `The sum of ${a} and ${b} is ${a + b}`; // This easy and readable
console.log(result);

const templete = `Hey there.
How are you?
Are you local here?
What's your name?`;

console.log(templete);
console.log(`We can write Multi-line Strings with the Template Literals`);