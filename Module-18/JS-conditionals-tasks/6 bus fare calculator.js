/***

Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/
let readLine = require('prompt-sync')();
let age = parseInt(readLine('Enter your age: '));
let students = parseInt(readLine('Are you a Student(0=>false and 1=>true): '));
let ticketPrice = 800;

if (age < 10) {
    ticketPrice = 0;
    console.log('Your age is ', age, 'and the ticket price is: ', ticketPrice);
} else if (age >= 60) {
    ticketPrice *= 0.85;
    console.log('Your age is ', age, 'and the ticket price is: ', ticketPrice);
} else if (age >= 11 && !!students) {
    ticketPrice *= 0.5;
    console.log('Your age is ', age, 'and the ticket price is: ', ticketPrice);
} else {
    ticketPrice = 800;
    console.log('Your age is ', age, 'and the ticket price is: ', ticketPrice);
}
