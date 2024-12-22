
const petOwner = {
    name: 'Jolonto Kholil',
    contact: {
        phone: '0193938485',
        email: 'xyz@gmail.com',
    },
    pet: {
        name: 'lofie',
        info: {
            color: 'black',
            weight: '1.25kg',
        },
    },
    food: ['apple', 'orange', 'papeya'],
};

console.log(petOwner.name);
console.log(petOwner.contact.phone);
console.log(petOwner?.pet?.info?.color);  // optional chaining hasn't any side effect
console.log(petOwner?.address?.houseNo);  // optional chaining is safe. always try to use Optional Chaining

console.log(petOwner?.food[1]);