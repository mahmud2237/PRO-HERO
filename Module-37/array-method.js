const products = [
    {name: 'laptop', price: 123500, brand: 'lenovo', color: 'white'},
    {name: 'keyboard', price: 2350, brand: 'walton', color: 'black'},
    {name: 'pc', price: 150000, brand: 'dell', color: 'silver'},
    {name: 'watch', price: 250000, brand: 'apple', color: 'golden'},
    {name: 'sunglass', price: 3500, brand: 'ribon', color: 'black'},
    {name: 'camera', price: 65500, brand: 'canon', color: 'blue'},
]
// we can use map in a variable to show the output
const brands = products.map(product => product.brand);
console.log(brands);
const prices = products.map(product => product.price);
console.log(prices);

// but forEach can't put on a variable to show output 
console.log('To show all products');
products.forEach(product => console.log(product));
console.log('To show all products name');
products.forEach(product => console.log(product.name));
console.log('To show all products price');
products.forEach(product => console.log(product.price));
console.log('To show all products brand');
products.forEach(product => console.log(product.brand));
console.log('To show all products color');
products.forEach(product => console.log(product.color));


// use filter to find more than one products or things
const cheap = products.filter(product => product.price <= 5000);
console.log('Products are under 5000 takas are:', cheap);

const specificName = products.filter(product => product.color.includes('b'));
console.log(specificName);


// use find to find out only one product or thing
const special = products.find(p => p.name.includes('p'));
console.log(`Find the name includes with 'p' is: ` , special);


