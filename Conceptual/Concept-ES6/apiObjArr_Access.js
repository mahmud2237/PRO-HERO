const people = [
    {
        id: 1,
        name: 'John Doe',
        Age: 30,
        occupation: 'Software Engineer',
        contact: {
            email: 'john.doe@gmail.com',
        },
        address: {
            street: '123 main St',
            city: 'San Francisco',
            state: 'CA',
            zip: '94353',
        },
        social: {
            twitter: '@johndoe',
        },
        hobbies: ['coding', 'Hiking', 'photography'],
    },
    {
        id: 2, 
        name: 'Jane Smith',
        age: 25, 
        occupation: 'Graphic Designer',
        contact: {
            email: 'jane.smith@example.com',
            phone: '085-9394-329',
        },
        hobbies: ['Drawing', 'Traveling'],
    },
    {
        id: 3, 
        name: 'Mark Johnson',
        age: 40,
        occupation: 'Marketing Manager',
        contact: {
            email: 'mark.johnson@example.com',
            phone: '0904-949-949',
        },
        address: {
            street: '789 Oak St',
            city: 'Chicago',
            state: 'IL',
            zip: '65505',
        },
        hobbies: ['Running', 'Golf'],
    },
];
const city = people[0]?.address;
console.log(city);
// now working with obj 2 and use optional chaining to find city
people.map((person) => {
    const sentence = `Persons name is ${person.name}. City: ${person?.address?.city || 'N/A'}`;
    console.log(sentence);
})
// when we need to find one person or thing, we will use find(). If need to find more then filter()
const x = people.find((p) => p.age == 40);
console.log(`${x.name} is 40 years old`);





