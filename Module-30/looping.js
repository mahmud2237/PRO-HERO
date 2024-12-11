const numbers = [1, 4, 5, 7, 9];
// for (let i = 0; i < numbers.length; i++){}
// while
// instead of for or while loop, we will use for...of for the array and string
for(const num of numbers){
    console.log(num);
}

const nobab = 'Siraj Ud Doula';
for(const nob of nobab){
    console.log(nob);
}

// but for...of not works for Object. So will use for...in 
const glass = {
    name: 'glass', 
    color: 'golden',
    shape: 'round',
    weight: 200,
    price: 1500,
    isClean: true,
}

for(const itemName in glass){
    console.log(itemName);
}