
const person = {
    01: 'id',
    name: 'Lal nil sobuj Mia',
    profession: 'Traffic Surgeon',
    age: 34,
    address: 'Shahbag'
}
// dot notation and bracket notation
const name = person.name;
console.log(name);
const proffession = person["profession"];
console.log(proffession);
// get the person age creating variables and string
const age = 'age';
const personAge = person[age];
console.log(personAge);

// it's not possible to get num varName output from dot notation
// but can get from bracket notation
const num = person[01];
console.log(num);



