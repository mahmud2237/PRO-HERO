/*
// BMI Calculator //
Write a JavaScript program to calculate Body Mass Index (BMI) of 5 users.
First, initialize two arrays: height[] with 5 integer values and weight[] with 5 integer values.
Depending on the calculated BMI value, display the corresponding category: 

If BMI is less than 18.5, display "Underweight".
If BMI is between 18.5 and 24.9 (Inclusive of both ends), display "Normal Weight".
If BMI is between 25 and 29.9 (Inclusive of both ends), display "Overweight".
If BMI is 30 or greater, display "Obese".

Note: The BMI formula is calculated as weight (in kilograms) divided by the square of height (in meters). 

Output Format
On a single line - display the following as space separated values

Display the calculated BMI value with two decimal places.
Display the corresponding BMI category using the exact spellings: "Underweight", "Normal Weight", "Overweight", or "Obese".

Sample Input:
    height = [1.70, 1.65, 1.80, 1.60, 1.75]
    weight = [30, 55, 90, 102, 65]
Sample Output:
    arrayBmi = [ '10.38', '20.20', '27.78', '39.84', '21.22' ]
    10.38 Underweight
    20.20 Normal Weight
    27.78 Overweight
    39.84 Obese
    21.22 Normal Weight
    
*/
// Solution:

const height = [1.70, 1.65, 1.80, 1.60, 1.75];
const weight = [30, 55, 90, 102, 65];

let arrayBmi = [];
let count_bmi = 0;
for (let i = 0; i < height.length; i++){
    count_bmi = weight[i] / (height[i] * height[i]);
    Bmi = count_bmi.toFixed(2);
    arrayBmi.push(Bmi);
    if(Bmi < 18.5){
        console.log(Bmi, 'Underweight');
    }
    else if(Bmi >= 18.5 && Bmi <= 24.9){
        console.log(Bmi, 'Normal Weight');
    }
    else if(Bmi >= 25 && Bmi <= 29.9){
        console.log(Bmi, 'Overweight');
    }
    else {
        console.log(Bmi, 'Obese');
    }
}
console.log('arrayBmi =', arrayBmi);