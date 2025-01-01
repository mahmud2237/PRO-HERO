
// array destructuring
const numbers = [42, 65];
// // before we did..
// const x = numbers[0];
// const y = numbers[1];
// But now after using destructuring we do...
const [x, y] = [42, 65];    // const [x, y] = numbers;
console.log(x, y);


function boxify(num1, num2){
    const nums = [num1, num2];
    return nums;
}
// const [first, second] = [97, 45];
const [first, second] = boxify(89, 45);
console.log(boxify(90, 34));

// destructuring from objects
const student = {
    name: 'sadib khan',
    age: 34,
    movie: ['king', 'kong'],
    childrens: {id: 1, name: 'Sohel', age: 24}
};
// destructuring from array
const [firstMovie, secondMovie] = student.movie;  // N:B: if array than use []
console.log(firstMovie, secondMovie);

// destructuring from obj
const {id, name, age} = student.childrens; // N:B: if obj than use {}
console.log(name, id, age);








