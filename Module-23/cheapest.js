const phones = [
    { name: 'samsung', price: '35000', camera: '12mp', color: 'black' },
    { name: 'huawei', price: '36000', camera: '16mp', color: 'grey' },
    { name: 'oppo', price: '20000', camera: '18mp', color: 'black' },
    { name: 'vivo', price: '28000', camera: '15mp', color: 'white' },
    { name: 'apple', price: '95000', camera: '18mp', color: 'white' },
    { name: 'google', price: '75000', camera: '20mp', color: 'silver' },
    { name: 'xiaomi', price: '40000', camera: '15mp', color: 'blue' },
    { name: 'oneplus', price: '55000', camera: '22mp', color: 'red' }
]

function getCheapestPhone(mobiles) {
    let min = mobiles[0];
    for (const mob of mobiles) {
        // console.log(mob);
        if (mob.price < min.price) {
            min = mob;
        }
    }
    return min;  // return the object with the minimum price
}
const cheap = getCheapestPhone(phones);
console.log('Cheapest phone is: ', cheap);

