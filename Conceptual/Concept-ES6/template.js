const Name = 'shahed';
const age = 25;
const job = 'Full-stack Developer';

// before template literal we need to write it in concatenation
const bigSentence = 'amar name ' + Name +'. amar age ' +age +' and ami akjon '+job;  // concatenation was difficult
console.log(bigSentence);

// After using template literal this is very easy like boom below:
const sohojSentence = `amar name ${Name}. amar age ${age} and ami akjon ${job}`;
console.log(sohojSentence);

// another example with obj and arr
const myInfo = {
    name: 'Shahed',
    age: 25,
    address: 'Dinajpur',
    sosurName: 'Sallu vijan',
    sosurBari: 'Mars',
    subjects: ['bangla', 'english', 'math'],
};

const sen = `amar name ${myInfo.name}. Amar subjects gulo holo ${myInfo.subjects.map((sub) => sub)}`;
console.log(sen);
const sentence = `amar name ${myInfo.name}. Amar subjects gulo holo ${myInfo.subjects.map((sub) => sub).join(' ')}`;
console.log(sentence);






