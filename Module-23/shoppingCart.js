const products = [
    { name: 'sampoo', price: 350, quantity: 2 },
    { name: 'chiruni', price: 360, quantity: 3 },
    { name: 'light', price: 200, quantity: 5 },
    { name: 'shirt', price: 290, quantity: 2 },
    { name: 'pant', price: 950, quantity: 1 }
]

function cartTotal(products){
    let total = 0;  // initialize total to 0
    for(const pro of products){
        total = total + (pro.price * pro.quantity);
    }
    return total;
}

const totalPrice = cartTotal(products);
console.log(totalPrice);







