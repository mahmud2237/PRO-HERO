const numbers = [23, 45, 65, 76, 89, 12];
const student = {
    name: 'sadib khan',
    age: 34,
    movie: ['king', 'kong'],
};

// template string
const about = `His Name is ${student['name']} age of ${student.age} has number ${numbers[2]} 
and his one of the movie name is ${student.movie[0]}`;
console.log(about);

// arrow function
const getFiftyFive = () => 55;
const addSixtyFive = Num => num + 5;
const isEven = x => x % 2 == 0;
const addThree = (x, y, z) => x + y + z;
const doMath = (num1, num2) =>{
    const sum = num1 + num2;
    return sum;
}

// spread operator
const newNumbers = [...numbers];
numbers.push(99);
console.log(newNumbers);
console.log(numbers);

const currentNum = [...numbers, 100]
console.log(currentNum);





