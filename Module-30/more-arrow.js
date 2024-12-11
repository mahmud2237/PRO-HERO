const difference = (x, y) => x - y;
console.log(difference(40, 15));

const multiply = (first, second, third) => first * second * third;
console.log(multiply(2, 3, 4));

const getAge = (person) => person.age;  
const student = {name: 'John', age: 45};
const age = getAge(student);
console.log(age);

const getThird = numbers => numbers[2];
const third = getThird([6, 8, 66, 54]);
console.log(third);

// no parameter
const getPI = () => Math.PI;
console.log(getPI());
//before all the arrow function was one line or single line so there wasn't need any return 
// --------------> Next
// large arrow function needs return function
const doMath = (a, b, c) => {
    const sum = a + b + c;
    const mult = a * b * c;
    const result = sum + mult;
    return result;
}









