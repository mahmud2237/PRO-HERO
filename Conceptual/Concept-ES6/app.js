const people = [
    {
        id: 1,
        name: 'John Doe',
        Age: 30,
        profession: 'Software Engineer',
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
        profession: 'Graphic Designer',
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
        profession: 'Marketing Manager',
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
    {
        id: 4, 
        name: 'Johnathon',
        age: 49,
        profession: 'Brand Development Manager',
        contact: {
            email: 'johnthon@example.com',
            phone: '904-956-967',
        },
        address: {
            street: '589 NQ St',
            city: 'North Quedland',
            state: 'NL',
            zip: '65705',
        },
        hobbies: ['Chess', 'Singing'],
    },
    {
        id: 5, 
        name: 'Markus',
        age: 45,
        profession: 'Marketing Chief Officer',
        contact: {
            email: 'markus@example.com',
            phone: '576-949-949',
        },
        address: {
            street: '897 Saint St',
            city: 'New York',
            state: 'NW',
            zip: '98705',
        },
        hobbies: ['Football', 'Gym'],
    },
];

const peopleList = document.getElementById('people-list');
const personInfo = document.getElementById('person-info');

const renderPeopleList = (people) => {
    people.map((person) => {
        const li = document.createElement('li');
        li.classList.add('cursor-pointer', 'text-blue-500', 'p-2');
        li.textContent = person.name;   // innerText

        li.addEventListener('click', () => {
            handlePersonClick(person.id);
        })

        peopleList.appendChild(li);
    });
};

const displayPersonInfo = (person) => {
    personInfo.classList.remove('hidden');
    document.getElementById('no-selection').classList.add('hidden');
    console.log(personInfo);
    personInfo.innerHTML = `
        <h2 class = 'text-2xl font-bold mb-2'>${person.name}</h2>
        <p>Profession: ${person?.profession} </p>
        <p>City: ${person?.address?.city || 'N/A'} </p>
        <p>Hobbies: ${person?.hobbies?.map((hobby) => hobby)}
    `;
}

const handlePersonClick = (id) => {
    console.log(id);
    const person = people.find((p) => p.id == id);
    displayPersonInfo(person);
};



renderPeopleList(people);

