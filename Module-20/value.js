const person = {
    name: 'sodor uddin',
    age: 23,
    profession: 'developer',
    'fav n': 544,
    salary: 25000,
    isMarried: true,
}
//updates the values by using dot, bracket and variable methodes
person.salary = 45000;
person['fav n'] = 86;
console.log(person);



const propName = 'profession';
person[propName] = 'devops';
console.log(person);

