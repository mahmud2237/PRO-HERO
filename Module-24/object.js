const nayok = {
    name: 'Sakib Khan',
    id: 112,
    adress: 'MoviePara', 
    isSingle: true,
    friends: ['Apu', 'Raaz', 'Salman', 'Amir'],
    movies: [{name: 'no.1 Sakib Khan', year: 2015}, {name: 'Dorod', year: 2016}],
    act: function(){
        console.log('I am now in a relationship with Apu');
    },
    car: {
        brand: 'Tesla',
        price: 5000000,
        made: 2025,
        menufacturer: {
            name: 'Tesla Motors',
            founded: 1961,
            headquarters: 'Palo Alto, California',
            employees: 1800000,
        }
    }
}

console.log(nayok.friends);
console.log(nayok.act);
nayok.act();
console.log(nayok.car.menufacturer);




