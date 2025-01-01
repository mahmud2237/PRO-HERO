// JSON => stringify and parse
const student = {
    name: 'sadib khan',
    age: 34,
    movies: ['king', 'kong'],
    childrens: {id: 1, name: 'Sohel', age: 24}
};
console.log(student); // normal obj
const studentJSON = JSON.stringify(student); // JSON Stringify obj
console.log(studentJSON);

// again make studentJSON to normal obj
const studentObj = JSON.parse(studentJSON);
console.log(studentObj);

// Fetch
fetch('https://openapi.programming-hero.com/api/peddy/category/catagories')
.then(res => res.json())
.then(data => console.log(data))
.catch(error => console.log(error));

// keys, values
const keys = Object.keys(student);
const values = Object.values(student);

// (array => for of) (object => for in)
// forEach, Map //
const numbers = [23, 54, 67, 87, 34, 78];
numbers.forEach(num =>  console.log(num)); // using forEach
const eachMap = numbers.map(num => num * 2); // using map
console.log(eachMap);

// add or remove from an array
const products = [
    {name: 'laptop', price: 123500, brand: 'lenovo', color: 'white'},
    {name: 'keyboard', price: 2350, brand: 'walton', color: 'black'},
    {name: 'pc', price: 150000, brand: 'dell', color: 'silver'},
    {name: 'watch', price: 250000, brand: 'apple', color: 'golden'},
    {name: 'sunglass', price: 3500, brand: 'ribon', color: 'black'},
    {name: 'camera', price: 65500, brand: 'canon', color: 'blue'},
];
const newProduct = {name: 'webcam', price: 1700, brand: 'lallu'};

// copy products array and then add newProduct
const newProductS = [...products, newProduct];
console.log(newProductS);
// create a new array without one specific item
// remove phone means create a new array without the phone
const ramaining = products.filter(product => product.name !== 'phone');
console.log(ramaining);




