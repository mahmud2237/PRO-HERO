const myInfo = {
    name: 'shahed',
    age: 25,
    address: 'Dinajpur',
    sosurName: 'Sallu',
    sosurBari: 'Mongol',
    contact: {
        phone: 264646,
        email: 'smahmud@gmail.com',
    },
};

const obj2 = {...myInfo};  // for object copy of the spread operator use like {...}

obj2.married = false;

console.log(myInfo);
console.log(obj2);


const myName = myInfo.name;
const myAge = myInfo.age;
console.log(`My name is ${myName} and age is ${myAge}`);

// same thing we can do by using destructuring below:
const {name, age} = myInfo;   // in obj destructuring use {} but it's not like the array. Only available variable we can call
console.log(`${name} is my name and age is ${age}`);

/* wrong destructuring way to call value which will show Error
const {contact.email} = myInfo;
console.log(contact.email);
*/

// Right way to destructuring below
// const {contact} = myInfo;
// console.log(contact);
// const {email} = contact; 
// console.log(email);


// OR Direct can call like this
// const {email} = myInfo.contact;
const {contact:{email}} = myInfo;
console.log(email);

// Now working with the dot notation, bracket notation
const myId = {
    name: 'mahmud',
    age: 26,
    address: 'ChirirBandar',
    sosurName: 'Sallu Vai',
    sosurBari: 'Chad',
    contact: {
        phone: 264676,
        email: 'mahmud@gmail.com',
    },
};
// object accessing
for(let key in myId){
    console.log(`${key} : ${myId[key]}`);
}

const x = 'sosurBari'; // key string 
const y = myId.age; // dot notation
const z = myId['contact']['phone']; // bracket notation // always use keys-values as an string
console.log(myId[x]);
console.log(y);
console.log(z);




