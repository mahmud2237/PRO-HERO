const students = [
    { name: 'mehedy bro', email: 'mehedi@gmail.com', avg: 56, fiftyPercent: true },
    { name: 'rakib bro', email: 'rakib@gmail.com', avg: 57, fiftyPercent: false },
    { name: 'sakib bro', email: 'sakib@gmail.com', avg: 42, fiftyPercent: false },
    { name: 'sojib bro', email: 'sojib@gmail.com', avg: 52, fiftyPercent: true },
    { name: 'sunny bro', email: 'sunny@gmail.com', avg: 32, fiftyPercent: false },
    { name: 'saki bro', email: 'saki@gmail.com', avg: 37, fiftyPercent: true },
    { name: 'akib bro', email: 'akib@gmail.com', avg: 55, fiftyPercent: true },
];
// condition: scic = avg = 48, fiftyPercent = true . Only show the person names for this conditions

// const scic = students.filter((person) => person.avg >= 48 && person.fiftyPercent === true);
// // console.log(scic);
// const names = scic.map((p) => p.name);
// console.log(names);

// same thing just return the arrow function
// const findSCIC = (students) => {
//     const scic = students.filter((person) => person.avg >= 48 && person.fiftyPercent === true);
//     // return scic;
//     const names = scic.map((p) => p.name);
//     return names;
// }

// make this code shorter 
const findSCIC = (students) => students.filter((person) => person.avg >= 48 && person.fiftyPercent).map((p) => p.name);
const results = findSCIC(students);
console.log(results);




