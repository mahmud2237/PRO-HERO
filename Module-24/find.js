const numbers = [45, 65, 23, 49, 78];

// for (let i = 0; i < numbers.length; i++){
//     const number = numbers[i];
//     console.log(number);
// }

// for (let i = numbers.length - 1; i >= 0; i--){
    // const number = numbers[i];
    // console.log(number);
// }

// same thing using for..of
// for(let number of numbers){
//     console.log(number);
// }

const products = [
    {id: 1, name: 'xiami One Night', price: 20000},
    {id: 2, name: 'Iphone 13 pro', price: 100000},
    {id: 3, name: 'Redmi 8', price: 50000},
    {id: 4, name: 'Samsung Galaxy S21', price: 80000},
    {id: 5, name: 'Huawei P40 Pro', price: 60000},
    {id: 6, name: 'OnePlus 9 Pro', price: 70000},
    {id: 7, name: 'Nokia 7', price: 30000}
]

// for(let product of products){
//     console.log(product);
// }

function matchProducts(products, search){
    const matched = [];
    for(let product of products){
        if(product.name.toLowerCase().includes(search.toLowerCase())){
            matched.push(product);
        }
    }
    return matched;
}

const results = matchProducts(products, 'Pro');
console.log(results);






