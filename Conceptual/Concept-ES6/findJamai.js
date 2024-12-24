const polapain = [
    { Name: 'Abul', job: 'govt', salary: 17000 },
    { Name: 'Babul', job: 'private', salary: 25000 },
    { Name: 'Kabul', job: 'govt', salary: 21000 },
    { Name: 'Habul', job: 'private', salary: 47000 },
    { Name: 'Sabul', job: 'govt', salary: 43000 },
    { Name: 'Mabul', job: 'private', salary: 60000 },
];
// condition: govt >= 20000 or private >= 45000. Then, lottery a random number
const jamais = polapain.filter(
    (pola) => 
        (pola.job === 'govt' && pola.salary >= 20000) ||
        (pola.job === 'private' && pola.salary >= 45000)
);
console.log(jamais);

// now lottery for choice only one from these chosen jamais
const lottery = Math.floor(Math.random() * jamais.length);
console.log(lottery);
console.log(jamais[lottery].Name, `tumi jitso vai...!`);



