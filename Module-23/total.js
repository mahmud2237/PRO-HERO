const numbers = [300, 100, 700, 1200];

const products = [
    { name: 'sampoo', price: 350 },
    { name: 'chiruni', price: 360 },
    { name: 'light', price: 200 },
    { name: 'shirt', price: 290 },
    { name: 'pant', price: 950 }
]

function getShoppingTotal(products){
    let total = 0;  // initialize total to 0
    for(const pro of products){
        total = total + pro.price;
    }
    return total;
}

const total = getShoppingTotal(products);
console.log(`Total ajke khosabe: `, total);







