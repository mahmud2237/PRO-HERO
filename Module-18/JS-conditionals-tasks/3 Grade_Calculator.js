/***

Grade Calculator

Create a simple JavaScript program that takes a student's score as input and returns their corresponding grade based on the following grading scale:

    A: 90-100
    B: 80-89
    C: 70-79
    D: 60-69
    F: 0-59

***/
let readLine = require('prompt-sync')();

// Get student's score
let score = parseInt(readLine('Enter your score(0 - 100): '));
if(score >= 0 && score <= 100)
{
    if (score >= 90 && score <= 100)
    {
        console.log('Your grade is A');
    }
    else if (score >= 80 && score <= 89)
    {
        console.log('Your grade is B');
    }
    else if (score >= 70 && score <= 79)
    {
        console.log('Your grade is C');
    }
    else if (score >= 60 && score <= 69)
    {
        console.log('Your grade is D');
    }
    else
    {
        console.log('Your grade is F');
    }
}
else{
    console.log('Invalid score. Please enter a score between 0 and 100.');
}