/*
1. You went to the supermarket to buy some apples and oranges. Calculate how much money the shopkeeper will return.

Input:
1. The first line total amount of money you have.
2. The second line cost of one kilogram of apples and oranges.

Output: Print the result like below:
Sample Input:
1000
700

Sample Output:
300
*/

/* 
//Solution 1:
var totalTaka = 1000;
var oneKgApple = 400;
var oneKgOrange = 300;
var inHand = totalTaka - (oneKgApple+oneKgOrange);
console.log(inHand);
*/

/*
2. Write a program to calculate the average marks of Mathematics, Biology, Chemistry, Physics and Bangla of a student.

Input:
The first line of the input is the five subjects mentioned above, respectively.

Output: Print the average marks of the student like below:

Sample Input:
75.25, 65, 80, 35.45, 99.50

Sample Output:
71.04
*/

/*
//Solution 2:
var readline = require('prompt-sync')();
var mathMarks = parseFloat(readline('Enter Math Marks: '));
var biologyMarks = parseFloat(readline('Enter Bio Marks: '));
var chemistryMarks = parseFloat(readline('Enter Chemistry Marks: '));
var physicsMarks = parseFloat(readline('Enter Physics Marks: '));
var banglaMarks = parseFloat(readline('Enter Bangla Marks: '));
var totalMarks = mathMarks + biologyMarks + chemistryMarks + physicsMarks + banglaMarks;
var arrMark =[mathMarks, biologyMarks, chemistryMarks, physicsMarks, banglaMarks];
var averageMarks = totalMarks / arrMark.length;

console.log('Average Marks is: ', averageMarks.toFixed(2));
*/

/*
3. Your task is to divide the given number by 5 and show the remainder as the output.

Input: 
The first line of the input contains the number.

Output: Print the remainder of the number divided by 5 like below:

Sample Input: 119

Sample Output: 4
*/

/*
//Solution 3:
var readLine = require('prompt-sync')();
var num = parseInt(readLine('Enter a number: '));
var remainder = num % 5;
console.log('The remainder is: ', remainder);
*/

/*
4. What will be the result of the following codes: 

1) const a = isNaN('11');
2) const b = isNaN(2-10);
Explain your answers.
*/

/*
//Solution 4:
const a = isNaN('11'); // false because '11' is a string and can be converted to a number.
const b = isNaN(2-10); // false because 2-10 is -8 and NaN is not equal to any number including NaN.
const c = isNaN('dfd');
console.log('a is:', a);
console.log('b is:', b);
console.log('c is:', c);
*/






